/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Gotham SSm A, sans-serif']
		},
		extend: {
			colors: {
				'personal-gray': 'rgba(23, 26, 32, 0.65)',
				'personal-white': '#F4F4F4CC',
				'personal-black': '#171A20',
				'cybertruck-color': '#171A20F2',
			},
		},
	},
	plugins: [],
}
