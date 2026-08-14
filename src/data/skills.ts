import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siTailwindcss,
  siNodedotjs,
  siReact,
} from 'simple-icons';

export interface Skill {
  /** Display label. Not always the icon's own title. */
  name: string;
  /** Raw SVG path data from simple-icons, rendered inline with currentColor. */
  path: string;
}

/**
 * Simple Icons ships no React Native mark, so it reuses the React glyph and
 * leans on the label to tell them apart.
 */
export const skills: readonly Skill[] = [
  { name: 'HTML5', path: siHtml5.path },
  { name: 'CSS', path: siCss.path },
  { name: 'JavaScript', path: siJavascript.path },
  { name: 'TypeScript', path: siTypescript.path },
  { name: 'Tailwind CSS', path: siTailwindcss.path },
  { name: 'Node.js', path: siNodedotjs.path },
  { name: 'React', path: siReact.path },
  { name: 'React Native', path: siReact.path },
];
