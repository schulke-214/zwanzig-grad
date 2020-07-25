const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const pageTemplate = path.resolve('./src/templates/page.tsx');

	const {errors, data} = await graphql(`
		{
			allContentfulSeite {
				edges {
					node {
						slug
					}
				}
			}
		}
	`);

	
	if (errors) {
		console.error(errors);
		throw errors;
	}

	const pages = data.allContentfulSeite.edges;

	pages.forEach(page => {
		createPage({
			path: `/${page.node.slug}/`,
			component: pageTemplate,
			context: {
				slug: page.node.slug
			}
		});
	});
}