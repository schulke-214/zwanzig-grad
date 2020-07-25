require('dotenv').config();
const path = require('path');

const CONTENT_DIR = path.join(__dirname, 'content');


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
	'gatsby-plugin-typescript',
];

const sources = [
];

const seo = [
	{
		resolve: 'gatsby-plugin-manifest',
		options: {
			name: 'Maximilian Schulke',
			short_name: 'Maximilian Schulke',
			start_url: '/',
			background_color: '#000000',
			theme_color: '#ffffff',
			display: 'standalone',
			icon: 'static/assets/favicon.png',
		},
	},
	{
		resolve: 'gatsby-plugin-google-analytics',
		options: {
			trackingId: 'UA-',
			anonymize: true,
		}
	},
	'gatsby-plugin-offline',
	'gatsby-plugin-react-helmet',
];

module.exports = {
	siteMetadata: {},
	plugins: [
		...dev,
		...sources,
		...seo
	]
};