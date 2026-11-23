import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#111315',
        surface: '#191B1E',
        'surface-elevated': '#22252A',
        primary: '#F1F0EC',
        secondary: '#929397',
        accent: {
          DEFAULT: '#AFA4FF',
          hover: '#C2BAFF',
          muted: '#8B7FF5',
        },
        border: {
          DEFAULT: '#303236',
          subtle: '#222428',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        content: '1320px',
      },
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
