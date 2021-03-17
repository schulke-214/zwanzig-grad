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
import { rem } from 'lib/polished';
import { tablet } from 'lib/media';

import { shorten } from 'utils/shorten';
import { projectNumber } from 'utils/format';


const ProjectMeta = styled.div`
	display: flex;
	margin-bottom: ${props => rem(props.theme.spacings.medium)};

	> div:not(:last-child) {
		margin-right: ${props => rem(props.theme.spacings.large)};
	}
`;

const ProjectMetaItemName = styled.p`
	font-weight: bold;
	font-size: 75%;
	margin-bottom: ${props => rem(props.theme.spacings.small)};
`;

const ProjectMetaItemValue = styled.p``;

const ProjectContentContainer = styled(ModuleContainer)`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: ${props => rem(props.theme.layout.maxWidth - props.theme.spacings.xlarge * 8)};


	${ModuleContainer} {
		margin-bottom: inherit;

		${tablet} {
			margin-bottom: 0;
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
			<ProjectContentContainer>
				<h1>{projectNumber(project.nr)} | {project.title}</h1>
				<ProjectMeta>
					<div>
						<ProjectMetaItemName>Ort</ProjectMetaItemName>
						<ProjectMetaItemValue>{project.location}</ProjectMetaItemValue>
					</div>
					<div>
						<ProjectMetaItemName>Jahr</ProjectMetaItemName>
						<ProjectMetaItemValue>{project.year}</ProjectMetaItemValue>
					</div>
				</ProjectMeta>
				<Text text={project.description} />
			</ProjectContentContainer>
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
