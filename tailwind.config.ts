import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        sm360: '360px',
        lg964: '964px',
        lgg: '826px',
      },
      fontFamily: {
        zen: ['var(--font-zenDots)'],
        pop_inter: ['var(--font-poppins)', 'var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('/assets/hero-car.webp')",
      }
    },
    plugins: [],
  },
};
export default config;
