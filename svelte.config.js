import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter({
      // fallback: '404.html',
      // pages: 'build',
      // assets: 'build',
      // precompress: false,
      // strict: true
    }),
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
      // base: '',
    },
    // router: {
    //   base: '',
    //   trailingSlash: 'always'
    // }
  },

  preprocess: [mdsvex()],
  extensions: ['.svelte', '.svx']
};

export default config;
