export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: 'trophy' | 'zap' | 'rocket' | 'star' | 'code' | 'users' | 'speed' | 'shield';
  unlocked: boolean;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface PlayerStat {
  label: string;
  value: string;
  max?: string;
}

export interface SkillLevel {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'tooling';
}

export const playerStats: readonly PlayerStat[] = [
  { label: 'Class', value: 'Full-Stack Developer' },
  { label: 'Level', value: '4' },
  { label: 'XP', value: '3.7 / 5 yr', max: '5 yr' },
  { label: 'Guild', value: 'Pasarpolis' },
  { label: 'Quests', value: '7 completed' },
  { label: 'Projects', value: '4 shipped' },
];

export const achievements: readonly Achievement[] = [
  {
    id: 'astro-migration',
    title: 'Performance Sage',
    description: 'Lifted Lighthouse performance score from 43 to 86 during Astro migration.',
    icon: 'speed',
    unlocked: true,
    rarity: 'epic',
  },
  {
    id: 'ocr-automation',
    title: 'Automation Alchemist',
    description: 'Cut manual claim input by ~40% with OCR automation.',
    icon: 'zap',
    unlocked: true,
    rarity: 'rare',
  },
  {
    id: 'purchase-flow',
    title: 'Architect',
    description: 'Built purchase-flow config framework that cut product onboarding cycles by 60%.',
    icon: 'code',
    unlocked: true,
    rarity: 'epic',
  },
  {
    id: 'fullstack-game',
    title: 'Game Builder',
    description: 'Shipped a full-stack game platform on Express.js with analytics dashboard.',
    icon: 'rocket',
    unlocked: true,
    rarity: 'legendary',
  },
  {
    id: 'team-collab',
    title: 'Party Leader',
    description: 'Integrated 10+ APIs across backend teams including international collaborators.',
    icon: 'users',
    unlocked: true,
    rarity: 'rare',
  },
  {
    id: 'educator',
    title: 'Mentor',
    description: 'Served as Assistant Lecturer guiding the next wave of developers.',
    icon: 'star',
    unlocked: true,
    rarity: 'common',
  },
  {
    id: 'claim-masters',
    title: 'Domain Master',
    description: 'Maintained claim-related features across 8 production portals.',
    icon: 'shield',
    unlocked: true,
    rarity: 'epic',
  },
  {
    id: 'always-learning',
    title: 'Eternal Student',
    description: 'Continuously shipping across insurance, gaming, and e-commerce domains.',
    icon: 'trophy',
    unlocked: true,
    rarity: 'common',
  },
];

export const skillLevels: readonly SkillLevel[] = [
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'React Native', category: 'mobile' },
  { name: 'Node.js', category: 'backend' },
];

export const rarityColors: Record<Achievement['rarity'], string> = {
  common: '#94a3b8',
  rare: '#66c0f4',
  epic: '#a78bfa',
  legendary: '#f7be82',
};
