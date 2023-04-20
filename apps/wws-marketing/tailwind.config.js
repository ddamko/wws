/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/tw-elements/dist/js/**/*.js"],
	theme: {
		extend: {},
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1280px",
			// => @media (min-width: 1280px) { ... }

			xl: "1920px"
			// => @media (min-width: 1920px) { ... }
		}
	},
	plugins: [require("tw-elements/dist/plugin.cjs")],
	darkMode: "class"
};
