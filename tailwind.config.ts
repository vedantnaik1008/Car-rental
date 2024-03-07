const defaultTheme = require('tailwindcss/defaultTheme');

const colors = require('tailwindcss/colors');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			animation: {
				shimmer: 'shimmer 2s linear infinite',
				scroll:
					'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
			},
			keyframes: {
				shimmer: { from: { backgroundPosition: '0 0' }, to: { backgroundPosition: '-200% 0' } },
				scroll: {
					to: {
						transform: 'translate(calc(-50% - 0.5rem))',
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
				pop_inter: ['var(--font-inter)', 'sans-serif'],
			},
			backgroundImage: {
				hero: "url('/assets/hero-car.webp')",
			},
		},

		plugins: [addVariablesForColors],
	},
};

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars,
	});
}
export default config;
