// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://maliefrr.github.io',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      // Only the two Astro's React integration does not already handle. Adding
      // react/react-dom here risks a second copy of React in the graph, which
      // breaks hooks and hydration outright.
      include: ['motion/react', '@phosphor-icons/react'],
    },
  },
});
