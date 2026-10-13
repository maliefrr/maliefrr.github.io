export const site = {
  name: 'Moh Alief Rizky Ramadhan',
  shortName: 'Moh Alief Rizky R',
  jobTitle: 'Full-Stack Developer',
  url: 'https://maliefrr.github.io/',
  avatar: 'https://avatars.githubusercontent.com/u/61228297?v=4',
  title: 'Moh Alief Rizky Ramadhan - Portfolio',
  tagline:
    'Software Engineer experienced in building production systems across the full application stack. Skilled in JavaScript, TypeScript, React, Node.js, and Express.js, with experience in API development, databases, authentication, testing, analytics, deployment, and internal automation',
  description:
    'Portfolio of Moh Alief Rizky Ramadhan, a Full-Stack Developer specializing in React, React Native, Next.js, Node.js, Express.js, and PostgreSQL.',
  keywords:
    'full-stack developer, software engineer, react, react native, next.js, astro, node.js, express.js, typescript, supabase, postgresql, grafana, web development, portfolio, Alief, Moh Alief Rizky Ramadhan, Tomato',
  summary:
    'Software Engineer experienced in building production systems across the full application stack. Skilled in JavaScript, TypeScript, React, Node.js, and Express.js, with experience in API development, databases, authentication, testing, analytics, deployment, and internal automation',
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
  { label: 'Quests', href: '#experience' },
  { label: 'Project', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const;
