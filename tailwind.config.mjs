/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#0d2b21',
          mid: '#4d7561',
          light: '#b8cab8',
        },
        neutral: {
          paper: '#faf8f3',
          cream: '#f5f1e8',
          ink: '#1a1a1a',
          'ink-muted': '#6b7a6e',
        },
        accent: {
          gold: '#d4af37',
          'gold-deep': '#a8821e',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'Cambria', 'serif'],
        body: ['DM Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -4px rgba(13, 43, 33, 0.08)',
        'lift': '0 12px 40px -8px rgba(13, 43, 33, 0.15)',
        'dramatic': '0 25px 60px -12px rgba(13, 43, 33, 0.25)',
        'glow': '0 0 40px -10px rgba(212, 175, 55, 0.3)',
        'inner-light': 'inset 0 1px 0 rgba(255,255,255,0.15)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
};
