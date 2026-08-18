import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * `order` drives display order (highest first) and preserves the sequence the
 * previous hand-maintained array used, which is not strictly chronological.
 */
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    status: z.enum(['Fulltime', 'Parttime', 'Internship', 'Freelance', 'Contract']),
    start: z.string(),
    end: z.string(),
    order: z.number().int(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      alt: z.string(),
      stack: z.array(z.string()),
      links: z
        .array(
          z.object({
            text: z.string(),
            url: z.string().url(),
          })
        )
        .min(1),
      order: z.number().int(),
    }),
});

export const collections = { experience, projects };
