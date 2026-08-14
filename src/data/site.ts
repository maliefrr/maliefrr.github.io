export const site = {
  name: 'Moh Alief Rizky Ramadhan',
  shortName: 'Moh Alief Rizky R',
  jobTitle: 'Frontend Engineer',
  url: 'https://maliefrr.github.io/',
  avatar: 'https://avatars.githubusercontent.com/u/61228297?v=4',
  title: 'Moh Alief Rizky Ramadhan - Portfolio',
  tagline:
    'Frontend engineer building React and React Native products for insurance, health tech, and public services.',
  description:
    'Portfolio of Moh Alief Rizky Ramadhan, a Software Engineer specializing in React, React Native, Node.js, and full-stack web development.',
  keywords:
    'software engineer, react, react native, javascript, typescript, node.js, web development, portfolio, Alief, Moh Alief Rizky Ramadhan, Tomato',
  summary:
    'Experienced Software Engineer with a strong foundation in academia, freelance development, and technical support. Proficient in React.js, React Native, and Express.js, with a focus on building responsive, user-friendly web applications. Known for clear communication, mentoring, and cross-functional collaboration. Past projects include a medical online queue app, an Android app for a civil service unit, and an electronic student identity system. Former assistant lecturer at Halu Oleo University and technical support staff in the health tech industry, bringing a unique blend of technical skill and user-centric thinking.',
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
