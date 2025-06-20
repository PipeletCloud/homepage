import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const menus = defineCollection({
  loader: glob({ pattern: '**/[^_]*.yaml', base: './src/content/menus' }),
});

export const collections = {
  menus,
};
