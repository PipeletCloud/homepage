// @ts-check
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import favicons from 'astro-favicons';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://pipelet.io',
  integrations: [
    mdx(),
    favicons({
      input: {
        favicons: [
          'public/favicon.png',
        ],
      },
      name: 'pipelet.io',
      manifest: {
        start_url: '/',
      },
    }),
  ],
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
