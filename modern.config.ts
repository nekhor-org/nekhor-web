import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';
import { appTools, defineConfig } from '@modern-js/app-tools';

export default defineConfig<'rspack'>({
  server: {
    ssr: true,
  },
  output: {
    charset: 'utf8',
    splitRouteChunks: false,
    externals: {
      bufferutil: 'bufferutil',
      'utf-8-validate': 'utf-8-validate',
    },
  },
  runtime: {
    router: true,
    state: true,
  },
  performance: {
    dnsPrefetch: [
      'http://static1.squarespace.com',
      'http://static1.squarespace.com',
      'https://static1.squarespace.com',
      'https://upload.wikimedia.org',
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com',
      'https://www.google.com',
      'https://www.gstatic.com',
      'https://nekhor.camisetaredutoralpostural.com.br',
      'https://nekhor-web-app-952yc.ondigitalocean.app',
      'https://nekhor.org',
      'https://nekhor-web-production.up.railway.app',
    ],
    preconnect: [
      'https://nekhor.camisetaredutoralpostural.com.br',
      'https://nekhor-web-app-952yc.ondigitalocean.app',
      'https://nekhor.org',
      'https://nekhor-web-production.up.railway.app',
    ],
    prefetch: {
      type: 'all-chunks',
      include: [/.*\.png$/],
    },
    chunkSplit: {
      strategy: 'split-by-experience',
    },
  },
  html: {
    favicon: './src/assets/favicon.png',
    title: 'Nekhor — Circling the Sacred',
    meta: {
      description:
        'An initiative of Lhasey Lotsawa, Nekhor is driven by a single mission: to connect you with the sacred sites where awakened masters have lived, practiced, and benefited our world.',
      'http-equiv': {
        'http-equiv': 'x-ua-compatible',
        content: 'ie=edge',
      },
      'Accept-CH': {
        'http-equiv': 'Accept-CH',
        content: 'Sec-CH-UA-Platform-Version, Sec-CH-UA-Model',
      },
      image_src: {
        rel: 'image_src',
        href: 'http://static1.squarespace.com/static/5b735348266c075124b0ffb3/t/5eabfee42343c149b75ecc7c/1588330213555/NEKHOR-home-Gold.png?format=1500w',
      },
      'og:image': {
        rel: 'og:image',
        href: '/thumb.png',
      },
      'og:image:width': {
        property: 'og:image:width',
        content: '399',
      },
      'og:image:height': {
        property: 'og:image:height',
        content: '97',
      },
    },
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
    tailwindcssPlugin(),
  ],
  source: {
    globalVars: {
      'process.env.API_BASE_URL': process.env.API_BASE_URL,
      'process.env.SUPABASE_URL': process.env.SUPABASE_URL,
      'process.env.SUPABASE_ANON_KEY': process.env.SUPABASE_ANON_KEY,
      'process.env.APP_BASE_URL': process.env.APP_BASE_URL,
    },
  },
});
