import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import solidJs from '@astrojs/solid-js';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), solidJs(), mdx()],
  output: 'hybrid',

  adapter: node({
    mode: 'standalone'
  })
});