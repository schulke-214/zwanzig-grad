require('dotenv').config();

const dev = [
	{
		resolve: 'gatsby-plugin-alias-imports',
		options: {
			alias: {
				components: './src/components',
				fonts: './src/fonts',
				lib: './src/lib',
				utils: './src/utils',
				hooks: './src/hooks',
				layouts: './src/layouts',
				pages: './src/pages',
				templates: './src/templates',
			},
		},
	},
	'gatsby-plugin-styled-components',
];

const sources = [
	{
		resolve: 'gatsby-source-contentful',
		options: {
			spaceId: process.env.CONTENTFUL_SPACE_ID,
			accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
		}
	}
];

const seo = [
	`gatsby-plugin-remove-serviceworker`,
	{
		resolve: 'gatsby-plugin-manifest',
		options: {
			name: 'Zwanzig Grad - Handwerk zum Wohnen',
			short_name: '20°',
			start_url: '/',
			background_color: '#000000',
			theme_color: '#c2c02f',
			display: 'standalone',
			icon: 'static/assets/favicon.png',
		},
	},
	'gatsby-plugin-react-helmet'
];


module.exports = {
	siteMetadata: {},
	plugins: [
		...dev,
		...sources,
		...seo
	]
};
