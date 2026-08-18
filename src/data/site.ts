export const site = {
  name: 'Moh Alief Rizky Ramadhan',
  shortName: 'Moh Alief Rizky R',
  jobTitle: 'Full-Stack Developer',
  url: 'https://maliefrr.github.io/',
  avatar: 'https://avatars.githubusercontent.com/u/61228297?v=4',
  title: 'Moh Alief Rizky Ramadhan - Portfolio',
  tagline:
    'Full-stack developer building end-to-end products with React, Node.js, and Express across insurance, game platforms, and e-commerce.',
  description:
    'Portfolio of Moh Alief Rizky Ramadhan, a Full-Stack Developer specializing in React, React Native, Next.js, Node.js, Express.js, and PostgreSQL.',
  keywords:
    'full-stack developer, software engineer, react, react native, next.js, astro, node.js, express.js, typescript, supabase, postgresql, grafana, web development, portfolio, Alief, Moh Alief Rizky Ramadhan, Tomato',
  summary:
    'Full-stack developer building complete systems, from backend APIs to admin dashboards to analytics, across insurance, game platforms, and e-commerce. I built a purchase flow configuration framework that cut product onboarding cycles by 60%, led an Astro migration that lifted Lighthouse performance from 43 to 86, and integrated OCR automation that removed roughly 40% of manual claim input. On the full-stack side I shipped a game platform on Express.js with a WYSIWYG admin dashboard, Grafana analytics covering DAU, revenue, ARPPU and engagement cohorts, and an automated asset deployment pipeline. My stack is TypeScript, React, React Native, Next.js, Node.js, Express.js, Supabase, PostgreSQL, and Grafana. A computer science graduate who works best collaborating across teams and shipping end-to-end products.',
  alumniOf: 'Halu Oleo University',
  contact: {
    email: 'maliefrr14@gmail.com',
    phone: '+6285156684730',
    whatsapp: 'https://wa.me/+6285156684730',
    street: 'Jl. Raya Sedati Agung No 46',
    locality: 'Sidoarjo',
    country: 'ID',
  },
  socials: [
    { name: 'GitHub', url: 'https://github.com/maliefrr' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/maliefrr/' },
    { name: 'Instagram', url: 'https://instagram.com/maliefrr' },
  ],
} as const;

/**
 * Labels and hrefs match the pre-redesign nav so existing bookmarks, anchor
 * links and any indexed fragments keep resolving.
 */
export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Project', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const;
