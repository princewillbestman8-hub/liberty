import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/context/**/*.{ts,tsx}',
    './src/data/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea6c0a',
          700: '#c2570c',
          800: '#9a4413',
          900: '#7c3812'
        },
        navy: {
          50: '#eef2ff',
          100: '#dce6ff',
          200: '#b3c7ff',
          300: '#7fa3ff',
          400: '#4a74ff',
          500: '#2554ff',
          600: '#1a3fd4',
          700: '#152ea8',
          800: '#0f2178',
          900: '#0c1a3a',
          950: '#060d1f'
        },
        ink: '#0c1a3a',
        sand: '#f4efe6'
      },
      boxShadow: {
        glow: '0 20px 60px rgba(12, 26, 58, 0.18)',
        orange: '0 8px 32px rgba(249, 115, 22, 0.35)',
        card: '0 2px 12px rgba(12, 26, 58, 0.08), 0 1px 3px rgba(12, 26, 58, 0.06)'
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #0c1a3a 0%, #1a3fd4 55%, #0f2178 100%)',
        'hero-overlay':
          'radial-gradient(ellipse at top right, rgba(249,115,22,0.18), transparent 60%), linear-gradient(135deg, #0c1a3a 0%, #152ea8 60%, #060d1f 100%)'
      }
    }
  },
  plugins: []
};

export default config;
