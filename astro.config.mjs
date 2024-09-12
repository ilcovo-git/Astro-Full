import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import solidJs from '@astrojs/solid-js';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';
// import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  // output: 'hybrid',
  // adapter: node({
  //   mode: 'standalone'
  // })
  integrations: [tailwind(), icon(), solidJs(), mdx()],

  output: 'server',
  adapter: cloudflare()
});