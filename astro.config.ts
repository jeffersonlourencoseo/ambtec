import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://licenciamentoambientalrio.com.br',
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), mdx(), sitemap()],
});
