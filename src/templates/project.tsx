import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import Layout from 'layouts/default';

import SEO from 'components/layout/SEO';

import { Project as ProjectType } from 'data/project';


interface ProjectProps {
	data: {
		project: ProjectType;
	};
}

const Project: FunctionComponent<ProjectProps> = ({ data }) => {
	const {project} = data;

	return (
		<Layout>
			<SEO
				title={project.title}
				slug={project.slug}
				description={project.description}
				keywords={project.materials}
			/>
			<h1>{project.title}</h1>
			{/* <ProjectLayout {...layout} /> */}
		</Layout>
	);
};

export const query = graphql`
	query ProjectQuery($slug: String) {
		project: contentfulProjekt(slug: {eq: $slug}) {
			title
		}
	}
`;

export default Project;
