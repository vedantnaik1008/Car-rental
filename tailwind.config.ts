import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: { shimmer: 'shimmer 2s linear infinite' },
      keyframes: {
        shimmer: { from: { backgroundPosition: '0 0' }, to: { backgroundPosition: '-200% 0' } },
      },
      screens: {
        sm: '320px',
        sm360: '360px',
        lg964: '964px',
        lgg: '826px',
      },
      fontFamily: {
        zen: ['var(--font-zenDots)'],
        pop_inter: ['var(--font-inter)', 'var(--font-poppins)', 'sans-serif'],
      },
      backgroundImage: {
        hero: "url('/assets/hero-car.webp')",
      },
    },

    plugins: [],
  },
};
export default config;
