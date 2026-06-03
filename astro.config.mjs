// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// User site served at the root of https://workfel.github.io
export default defineConfig({
  site: 'https://workfel.github.io',
  base: '/',
  build: {
    // inline the (small) CSS into the HTML so it never render-blocks
    inlineStylesheets: 'always',
  },
});
