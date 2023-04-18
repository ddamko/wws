const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],

	theme: {
		extend: {},
		screens: {
			'sm': '640px',
      		'md': '768px',
			'lg': '1280px',
			'xl': '1980px',
		}
	},

	plugins: [...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()]
};

module.exports = config;
