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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.neutral.ink'),
            '--tw-prose-headings': theme('colors.brand.deep'),
            '--tw-prose-lead': theme('colors.neutral.ink-muted'),
            '--tw-prose-links': theme('colors.brand.mid'),
            '--tw-prose-bold': theme('colors.brand.deep'),
            '--tw-prose-counters': theme('colors.accent.gold-deep'),
            '--tw-prose-bullets': theme('colors.accent.gold'),
            '--tw-prose-hr': theme('colors.brand.light'),
            '--tw-prose-quotes': theme('colors.brand.deep'),
            '--tw-prose-quote-borders': theme('colors.accent.gold'),
            '--tw-prose-captions': theme('colors.neutral.ink-muted'),
            '--tw-prose-th-borders': theme('colors.brand.light'),
            '--tw-prose-td-borders': theme('colors.brand.light'),
            '--tw-prose-code': theme('colors.brand.deep'),
            '--tw-prose-pre-code': theme('colors.neutral.ink'),
            '--tw-prose-pre-bg': theme('colors.neutral.cream'),
            lineHeight: '1.8',
            p: {
              marginBottom: '1.5rem',
              marginTop: '0',
            },
            'h2, h3': {
              fontFamily: theme('fontFamily.display'),
              letterSpacing: '-0.02em',
            },
            h2: {
              fontSize: '1.875rem',
              lineHeight: '1.25',
              marginTop: '3rem',
              marginBottom: '1.25rem',
              paddingBottom: '0.75rem',
              borderBottom: `1px solid ${theme('colors.brand.light')}`,
            },
            h3: {
              fontSize: '1.5rem',
              lineHeight: '1.35',
              marginTop: '2.5rem',
              marginBottom: '1rem',
            },
            blockquote: {
              fontStyle: 'normal',
              fontWeight: '500',
              backgroundColor: theme('colors.neutral.cream'),
              padding: '1.5rem',
              borderRadius: '0.75rem',
              borderLeftWidth: '4px',
              borderLeftColor: theme('colors.accent.gold'),
            },
            'blockquote p:first-of-type::before': {
              content: 'none',
            },
            'blockquote p:last-of-type::after': {
              content: 'none',
            },
            ul: {
              marginBottom: '1.5rem',
              paddingLeft: '1.5rem',
            },
            'ul > li': {
              marginBottom: '0.75rem',
              paddingLeft: '0.5rem',
            },
            'ul > li::marker': {
              color: theme('colors.accent.gold'),
            },
            ol: {
              marginBottom: '1.5rem',
              paddingLeft: '1.5rem',
            },
            'ol > li': {
              marginBottom: '0.75rem',
              paddingLeft: '0.5rem',
            },
            'ol > li::marker': {
              color: theme('colors.accent.gold-deep'),
              fontWeight: '700',
            },
            table: {
              fontSize: '0.95rem',
              marginTop: '1.5rem',
              marginBottom: '2rem',
            },
            'thead th': {
              backgroundColor: theme('colors.brand.deep'),
              color: theme('colors.neutral.paper'),
              fontWeight: '700',
              padding: '0.875rem 1rem',
              textAlign: 'left',
            },
            'tbody td': {
              padding: '0.75rem 1rem',
              verticalAlign: 'top',
            },
            'tbody tr:nth-child(even)': {
              backgroundColor: theme('colors.neutral.cream'),
            },
            hr: {
              marginTop: '2.5rem',
              marginBottom: '2.5rem',
            },
            strong: {
              color: theme('colors.brand.deep'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
