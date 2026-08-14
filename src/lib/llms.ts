import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { skills } from '../data/skills';

const absolute = (path: string) => new URL(path, site.url).href;

/** Collapse a markdown body to a single clean paragraph. */
const flatten = (body: string) => body.trim().replace(/\s*\n\s*/g, ' ');

/**
 * Short index, per the llms.txt convention: what this site is, plus where the
 * full content lives.
 */
export async function buildLlmsIndex(): Promise<string> {
  return [
    `# ${site.name}`,
    '',
    `> ${site.tagline}`,
    '',
    site.summary,
    '',
    '## Pages',
    '',
    `- [Portfolio](${absolute('/')}): single-page portfolio with summary, work experience, projects, skills and contact details.`,
    `- [Full profile as plain text](${absolute('/llms-full.txt')}): every section of the portfolio in markdown.`,
    '',
    '## Links',
    '',
    ...site.socials.map((social) => `- [${social.name}](${social.url})`),
    `- [Email](mailto:${site.contact.email})`,
    '',
  ].join('\n');
}

/** Full markdown mirror of the page, generated from the same collections. */
export async function buildLlmsFull(): Promise<string> {
  const experience = (await getCollection('experience')).sort(
    (a, b) => b.data.order - a.data.order
  );
  const projects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);

  return [
    `# ${site.name}`,
    '',
    `${site.jobTitle}. ${site.tagline}`,
    '',
    `Source: ${absolute('/')}`,
    '',
    '## Professional summary',
    '',
    site.summary,
    '',
    '## Work experience',
    '',
    ...experience.map((entry) =>
      [
        `### ${entry.data.role}, ${entry.data.company}`,
        '',
        `- Period: ${entry.data.start} to ${entry.data.end}`,
        `- Employment type: ${entry.data.status}`,
        '',
      ].join('\n')
    ),
    '## Projects',
    '',
    ...projects.map((project) =>
      [
        `### ${project.data.title}`,
        '',
        flatten(project.body ?? ''),
        '',
        `- Stack: ${project.data.stack.join(', ')}`,
        ...project.data.links.map((link) => `- ${link.text}: ${link.url}`),
        '',
      ].join('\n')
    ),
    '## Skills',
    '',
    ...skills.map((skill) => `- ${skill.name}`),
    '',
    '## Education',
    '',
    `- ${site.alumniOf}`,
    '',
    '## Contact',
    '',
    `- Email: ${site.contact.email}`,
    `- WhatsApp: ${site.contact.whatsapp}`,
    `- Location: ${site.contact.locality}, Indonesia`,
    ...site.socials.map((social) => `- ${social.name}: ${social.url}`),
    '',
  ].join('\n');
}
