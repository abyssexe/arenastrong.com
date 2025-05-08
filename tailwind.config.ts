import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './posts/**/*.{md}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1c1c1c',
        foreground: '#ffffff',
        primary: '#202020',
        secondary: '#c41230',
        accent: '#0057b8',
        light: '#a2a2a2',
        dark: '#161616',
        gray: '#555555',
      },
      typography: {
        invert: {
          css: {
            color: '#d1d1d1',
            h1: {
              color: '#ffffff',
              fontSize: '2.25rem',
              fontWeight: '700',
              marginBottom: '1rem',
            },
            h2: {
              color: '#ffffff',
              fontSize: '1.75rem',
              fontWeight: '600',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              color: '#ffffff',
              fontSize: '1.5rem',
              fontWeight: '600',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            p: {
              color: '#d1d1d1',
              marginBottom: '1.5rem',
            },
            blockquote: {
              color: '#ccc',
              borderLeft: '4px solid #444',
              paddingLeft: '1rem',
              fontStyle: 'italic',
            },
            hr: {
              borderColor: '#333',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            strong: {
              color: '#fff',
            },
            a: {
              color: '#60a5fa',
              textDecoration: 'underline',
              '&:hover': {
                color: '#3b82f6',
              },
            },
            br: {
              display: 'block',
              marginTop: '1rem', // gives visual space for soft line breaks
              content: '" "',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
