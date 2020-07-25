const path = require('path');

module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`,
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				src: path.join(__dirname, 'src'),
				components: path.join(__dirname, 'src/components'),
				layouts: path.join(__dirname, 'src/layouts'),
				lib: path.join(__dirname, 'src/lib'),
				pages: path.join(__dirname, 'src/pages'),
				hooks: path.join(__dirname, 'src/hooks')
			}
		}
	]
}
