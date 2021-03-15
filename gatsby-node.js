const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const pageTemplate = path.resolve('./src/templates/page.tsx');
	const projectTemplate = path.resolve('./src/templates/project.tsx');

	const {errors, data} = await graphql(`
		{
			allContentfulSeite {
				edges {
					node {
						metadata {
							slug
						}
						#subpages {
						#	metadata {
						#		slug
						#	}
						#}
					}
				}
			}
			allContentfulProjekt {
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
		const pageSlug = page.node.metadata.slug;
		const isHomePage = pageSlug === null || pageSlug.trim() === '';

		if (isHomePage) {
			createPage({
				path: `/`,
				component: pageTemplate,
				context: {
					slug: null
				}
			});
		} else {
			createPage({
				path: `/${pageSlug}/`,
				component: pageTemplate,
				context: {
					slug: pageSlug
				}
			});
		}
		
		// if (!page.node.subpages) return;

		// const prefix = isHomePage ? '/' : `/${pageSlug}/`;

		// page.node.subpages.forEach(subpage => {
		// 	createPage({
		// 		path: `${prefix}${subpage.metadata.slug}/`,
		// 		component: subpageTemplate,
		// 		context: {
		// 			slug: subpage.metadata.slug
		// 		}
		// 	});
		// })
	});

	const projects = data.allContentfulProjekt.edges;

	projects.forEach(project => {
		const projectSlug = project.node.slug;

		createPage({
			path: `/projekt/${projectSlug}/`,
			component: projectTemplate,
			context: {
				slug: projectSlug
			}
		});
	});
}