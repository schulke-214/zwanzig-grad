import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from 'layouts/default';

import SEO from 'components/layout/SEO';
import Slider from 'components/modules/Slider';
import Text from 'components/modules/Text';
import ModuleContainer from 'components/generic/ModuleContainer';

import { Project as ProjectType } from 'data/project';

import { intoPlainText } from 'lib/rich-text';

import { shorten } from 'utils/shorten';
import { rem } from 'lib/polished';
import { landscape } from 'lib/media';


const ProjectHeaderSpacer = styled.span`
	display: none;

	${landscape} {
		display: block;
		margin: 0 ${props => rem(props.theme.spacings.medium)};
	}
`;

const ProjectHeaderMaterialList = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
	padding: ${props => rem(props.theme.spacings.xsmall)} 0;

	li {
		margin: 0;
		padding: 0;
		line-height: 0.8;

		&:not(:last-child) {
			margin-right: ${props => rem(props.theme.spacings.xsmall)};

			&:after {
				content: ', ';
			}
		}
	}
`;

const ProjectHeader = styled(ModuleContainer)`
	display: flex;
	flex-direction: column;

	${landscape} {
		flex-direction: row;
		align-items: center;
	}

	h1 {
		${landscape} {
			margin: 0;
		}
	}
`;


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
			<ProjectHeader>
				<h1>{project.title}</h1>
				<ProjectHeaderSpacer />
				<span>{project.year}</span>
				<ProjectHeaderSpacer>|</ProjectHeaderSpacer>
				<span>Für {project.client}</span>
				<ProjectHeaderSpacer>|</ProjectHeaderSpacer>
				<ProjectHeaderMaterialList>
					{project.material.map(item => <li key={item}>{item}</li>)}
				</ProjectHeaderMaterialList>
			</ProjectHeader>
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
