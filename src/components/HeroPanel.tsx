import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';

/** Max tilt in degrees at the far edge of the panel. */
const MAX_TILT = 5;
const SPRING = { stiffness: 140, damping: 18, mass: 0.6 };

interface HeroPanelProps {
  children: ReactNode;
}

/**
 * Glass panel that tilts toward the pointer. Wraps server-rendered markup that
 * Astro slots in as children, so the hero copy stays in the HTML payload.
 *
 * Pointer position lives in motion values, never React state, so tracking the
 * cursor does not re-render the tree on every frame.
 */
export function HeroPanel({ children }: HeroPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]), SPRING);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]), SPRING);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || event.pointerType !== 'mouse' || !ref.current) return;

    const bounds = ref.current.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="glass w-full max-w-2xl p-7 sm:p-10"
    >
      {children}
    </motion.div>
  );
}
