import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			white: '#fff',
			black: '#000',
			blue: {
				1: '#0d1520',
				2: '#111927',
				3: '#0d2847',
				4: '#003362',
				5: '#004074',
				6: '#104d87',
				7: '#205d9e',
				8: '#2870bd',
				9: '#0090ff',
				10: '#3b9eff',
				11: '#70b8ff',
				12: '#c2e6ff'
			}
		}
	},
	plugins: []
} satisfies Config;
