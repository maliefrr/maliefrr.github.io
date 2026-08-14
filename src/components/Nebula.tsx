import { useEffect, useRef } from 'react';

/** Below this width the canvas is skipped and the CSS nebula carries the look. */
const MIN_WIDTH = 768;
/** Cap the device pixel ratio: a nebula does not need 3x sampling. */
const MAX_DPR = 1.75;

const VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  precision highp float;

  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uBase;
  uniform vec3 uGlow;
  uniform vec3 uMid;
  uniform vec3 uDeep;

  // Value noise + fbm. Cheap, smooth, good enough for slow gas clouds.
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float total = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 5; i++) {
      total += noise(p) * amplitude;
      p *= 2.02;
      amplitude *= 0.5;
    }
    return total;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    vec2 p = vec2(uv.x * aspect, uv.y) * 2.4;

    float drift = uTime * 0.02;
    float clouds = fbm(p + vec2(drift, drift * 0.6));
    float detail = fbm(p * 2.1 - vec2(drift * 0.8, drift * 0.3));
    float density = clamp(clouds * 0.75 + detail * 0.35, 0.0, 1.0);

    vec3 color = uBase;
    color = mix(color, uDeep, smoothstep(0.25, 0.75, density));
    color = mix(color, uMid, smoothstep(0.45, 0.9, density) * 0.65);
    color = mix(color, uGlow, pow(smoothstep(0.62, 1.0, density), 2.0) * 0.55);

    // Fade the whole field toward the page background at the edges so the
    // canvas never shows a hard seam against the section below it.
    float vignette = smoothstep(1.05, 0.25, length(uv - 0.5) * 1.6);
    color = mix(uBase, color, vignette);

    gl_FragColor = vec4(color, 1.0);
  }
`;

type Palette = { base: string; glow: string; mid: string; deep: string };

const PALETTES: Record<'dark' | 'light', Palette> = {
  dark: { base: '#171a21', glow: '#66c0f4', mid: '#2a475e', deep: '#1b2838' },
  light: { base: '#eef3fa', glow: '#f7be82', mid: '#97bee3', deep: '#c9dcf1' },
};

function currentPalette(): Palette {
  const theme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
  return PALETTES[theme];
}

/**
 * WebGL nebula behind the hero. Lazy-loaded, hero-scoped, and skipped entirely
 * on small screens or under reduced motion, where the CSS nebula painted
 * underneath is the whole effect.
 */
export function Nebula() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || window.innerWidth < MIN_WIDTH) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    // Dynamic import keeps three out of the initial bundle entirely.
    import('three')
      .then((THREE) => {
        if (disposed) return;

        const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, MAX_DPR));
        renderer.setSize(container.clientWidth, container.clientHeight, false);
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
        renderer.domElement.setAttribute('aria-hidden', 'true');
        container.appendChild(renderer.domElement);

        const palette = currentPalette();
        const uniforms = {
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
          uBase: { value: new THREE.Color(palette.base) },
          uGlow: { value: new THREE.Color(palette.glow) },
          uMid: { value: new THREE.Color(palette.mid) },
          uDeep: { value: new THREE.Color(palette.deep) },
        };

        const scene = new THREE.Scene();
        const camera = new THREE.Camera();
        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
          vertexShader: VERTEX_SHADER,
          fragmentShader: FRAGMENT_SHADER,
          uniforms,
        });
        scene.add(new THREE.Mesh(geometry, material));

        const clock = new THREE.Clock();
        let frame = 0;
        let running = true;

        const renderLoop = () => {
          frame = requestAnimationFrame(renderLoop);
          uniforms.uTime.value = clock.getElapsedTime();
          renderer.render(scene, camera);
        };

        const start = () => {
          if (running) return;
          running = true;
          clock.start();
          frame = requestAnimationFrame(renderLoop);
        };

        const stop = () => {
          if (!running) return;
          running = false;
          clock.stop();
          cancelAnimationFrame(frame);
        };

        frame = requestAnimationFrame(renderLoop);

        // Stop rendering once the hero scrolls away or the tab is hidden.
        const visibility = new IntersectionObserver(
          ([entry]) => (entry?.isIntersecting ? start() : stop()),
          { threshold: 0 }
        );
        visibility.observe(container);

        const onVisibilityChange = () => (document.hidden ? stop() : start());
        document.addEventListener('visibilitychange', onVisibilityChange);

        const resize = new ResizeObserver(() => {
          const { clientWidth, clientHeight } = container;
          renderer.setSize(clientWidth, clientHeight, false);
          uniforms.uResolution.value.set(clientWidth, clientHeight);
        });
        resize.observe(container);

        // Repaint in the other palette when the theme toggle flips.
        const themeWatcher = new MutationObserver(() => {
          const next = currentPalette();
          uniforms.uBase.value.set(next.base);
          uniforms.uGlow.value.set(next.glow);
          uniforms.uMid.value.set(next.mid);
          uniforms.uDeep.value.set(next.deep);
        });
        themeWatcher.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['data-theme'],
        });

        cleanup = () => {
          stop();
          visibility.disconnect();
          resize.disconnect();
          themeWatcher.disconnect();
          document.removeEventListener('visibilitychange', onVisibilityChange);
          geometry.dispose();
          material.dispose();
          renderer.dispose();
          renderer.domElement.remove();
        };
      })
      .catch(() => {
        // WebGL unavailable or the chunk failed: the CSS nebula is already
        // painted underneath, so there is nothing to fall back to.
      });

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
