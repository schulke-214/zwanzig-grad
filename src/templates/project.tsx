import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';
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


const ProjectMeta = styled.div`
	display: flex;
	flex-direction: column;

	${tablet} {
		padding-left: ${props => rem(props.theme.spacings.xlarge)};
	}
`;

const ProjectMetaItemName = styled.p`
	font-weight: bold;
	font-size: 75%;
`;

const ProjectMetaItemValue = styled.p`
	margin-bottom: ${props => rem(props.theme.spacings.medium)};
`;

const ProjectMetaMaterialList = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;

	li {
		margin: 0;
		padding: 0;

		&:not(:last-child) {
			margin-right: ${props => rem(props.theme.spacings.xsmall)};

			&:after {
				content: ', ';
			}
		}
	}
`;

const ProjectContentContainer = styled(ModuleContainer)`
	display: flex;
	flex-direction: column;

	${tablet} {
		flex-direction: row;
	}

	${ModuleContainer} {
		margin-bottom: inherit;

		${tablet} {
			margin-bottom: 0;
			flex: 1 1 100%;
		}
	}

	${ProjectMeta} {
		${tablet} {
			flex: 1 1 ${props => rem(props.theme.layout.maxWidth / 4)};
		}
	}
`;

interface ProjectProps {
	data: {
		project: ProjectType;
		similar: {
			edges: [{
				node: ProjectType;
			}]
		}
	};
}

const Project: FunctionComponent<ProjectProps> = ({ data }) => {
	const {project, similar} = data;

	console.log(similar)

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

			<ProjectContentContainer>
				<Text text={project.description} />
				<ProjectMeta>
					<ProjectMetaItemName>Ort</ProjectMetaItemName>
					<ProjectMetaItemValue>{project.location}</ProjectMetaItemValue>
					<ProjectMetaItemName>Jahr</ProjectMetaItemName>
					<ProjectMetaItemValue>{project.year}</ProjectMetaItemValue>
					<ProjectMetaItemName>Kunde</ProjectMetaItemName>
					<ProjectMetaItemValue>{project.client}</ProjectMetaItemValue>
					<ProjectMetaItemName>Materialien</ProjectMetaItemName>
					<ProjectMetaMaterialList>
						{project.material.map(item => <li key={item}>{item}</li>)}
					</ProjectMetaMaterialList>
				</ProjectMeta>
			</ProjectContentContainer>

			{similar.edges.length > 1 && (
				<>
					<h2>Weitere Projekte aus {project.location}</h2>
					<ul>
						{similar.edges.map(edge => edge.node).map(similarProject => (
							<li key={similarProject.slug}>
								<Link to={`/projekt/${similarProject.slug}/`} title={`Jetzt mehr über ${similarProject.title} erfahren`}>
									{similarProject.title}
								</Link>
							</li>
						))}
					</ul>
				</>
			)}
		</Layout>
	);
};

export const query = graphql`
	query ProjectQuery($slug: String, $location: String) {
		project: contentfulProjekt(slug: {eq: $slug}) {
			...Project
		}

		similar: allContentfulProjekt(filter: {location: {eq: $location}, slug: {ne: $slug}}, limit: 3) {
			edges {
				node {
					...Project
				}
			}
		}
	}
`;

export default Project;
