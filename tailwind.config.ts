import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				shimmer: 'shimmer 2s linear infinite',
				infinateScroll: 'infiniteScroll 10s infinite linear',
				['infinite-slider']: 'infiniteSlider 20s linear infinite',
			},
			keyframes: {
				shimmer: { from: { backgroundPosition: '0 0' }, to: { backgroundPosition: '-200% 0' } },
				infiniteScroll: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
				infiniteSlider: {
					'0%': { transform: 'translateX(0)' },
					'100%': {
						transform: 'translateX(calc(-250px * 5))',
					},
				},
			},
			screens: {
				sm: '320px',
				sm360: '360px',
				sm600: '600px',
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
