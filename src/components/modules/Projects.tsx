import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { useMedia } from 'react-use';

import ModuleContainer from 'components/generic/ModuleContainer';
import Picture from 'components/generic/Picture';

import { Project as ProjectType, ProjectType as ProjectTypeEnum } from 'data/project';

import { landscape } from 'lib/media';
import { rem } from 'lib/polished';
import { getProjectUrl } from 'lib/urls';

import { projectNumber } from 'utils/format';


interface ProjectProps extends ProjectType {
	className?: string;
};

const UnstyledProjectTeaser: FunctionComponent<ProjectProps> = (props) => {
	const { className, title, nr, tileImage } = props;

	return (
		<div className={className}>
			<Link to={getProjectUrl(props)}>
				<Picture {...tileImage} isSlim />
				<span>{projectNumber(nr)} | {title}</span>
			</Link>
		</div>
	);
};

const ProjectTeaser = styled(UnstyledProjectTeaser)`
	&, a, img {
		display: block;
		width: 100%;
	}

	${Picture} {
		margin-bottom: ${props => rem(props.theme.spacings.xsmall)};
	}

	span {
		line-height: 1;
	}

	&:not(:last-child) {
		margin-bottom: ${props => rem(props.theme.spacings.small)};
	}

	a::before {
		content: unset;
	}
`;


interface ProjectsProps {
	className?: string;
	type: ProjectTypeEnum;
}

const Projects: FunctionComponent<ProjectsProps> = ({ className, type }) => {
	const isLandscape = useMedia(landscape.replace('@media ', ''));
	const data = useStaticQuery(
		graphql`
			query Projekte {
				allContentfulProjekt(sort: {fields: nr, order: DESC}) {
					edges {
						node {
							...Project
						}
					}
				}
			}
		`
	);

	const projects: [ProjectType] = data?.allContentfulProjekt?.edges
		.map((edge: {node: ProjectType}) => edge.node)
		.filter((project: ProjectType) => project.type === type);

	const left = projects.filter((_, index) => !(index % 2));
	const right = projects.filter((_, index) => index % 2);

	const renderProject = (project: ProjectType) => (
		<ProjectTeaser
			{...project}
			key={project.slug}
		/>
	);

	return (
		<ModuleContainer className={className}>
			{ isLandscape ? (
				<>
					<div>{left.map(renderProject)}</div>
					<div>{right.map(renderProject)}</div>
				</>
			) : (<div>{projects.map(renderProject)}</div>)}
		</ModuleContainer>
	);
};

export default styled(Projects)`
	display: flex;
	flex-direction: column;

	${landscape} {
		flex-direction: row;
	}

	> div {
		display: block;

		&:first-child {
			margin-bottom: ${props => rem(props.theme.spacings.medium)};
		}

		${landscape} {
			&:first-child {
				margin-bottom: 0;
				margin-right: ${props => rem(props.theme.spacings.medium)};
			}

			width: 50%;
		}
	}
`;
