import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import Layout from 'layouts/default';

import SEO from 'components/layout/SEO';
import Slider from 'components/modules/Slider';
import Text from 'components/modules/Text';

import { Project as ProjectType } from 'data/project';

import { intoPlainText } from 'lib/rich-text';

import { shorten } from 'utils/shorten';


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
				description={shorten(intoPlainText(project.description), 255)}
				keywords={project.material}
			/>
			<Slider images={project.images} showTitle={false} title="" />
			<h1>{project.title}</h1>
			<ul>{project.material.map(item => <li key={item}>{item}</li>)}</ul>
			<Text text={project.description} />
		</Layout>
	);
};

export const query = graphql`
	query ProjectQuery($slug: String) {
		project: contentfulProjekt(slug: {eq: $slug}) {
			...Project
		}
	}
`;

export default Project;
