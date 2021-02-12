import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';

import ModuleContainer from 'components/generic/ModuleContainer';

import { tablet } from 'lib/media';
import { rem } from 'lib/polished';

import { Project as ProjectType } from 'data/project';


interface ProjectProps extends ProjectType {
	className?: string;
};

const UnstyledProjectTeaser: FunctionComponent<ProjectProps> = ({className, title, year, client, tileImage, slug}) => {
	return (
		<div className={className}>
			<Link to={`/projekt/${slug}`}>
				<img src={tileImage.fluid.src} alt={tileImage.description} />
				<span>{year} | {title} für {client}</span>
			</Link>
		</div>
	);
};

const ProjectTeaser = styled(UnstyledProjectTeaser)`
	&:not(:last-child) {
		margin-bottom: ${props => rem(props.theme.spacings.large)};
	}

	a::before {
		content: unset;
	}
`;


interface ProjectsProps {
	className?: string;
}

const Projects: FunctionComponent<ProjectsProps> = ({className}) => {
	const data = useStaticQuery(
		graphql`
			query Projekte {
				allContentfulProjekt {
					edges {
						node {
							...Project
						}
					}
				}
			}
		`
	);

	const projects: [ProjectType] = data?.allContentfulProjekt?.edges.map((edge: {node: ProjectType}) => edge.node);
	const left = projects.filter((_, index) => index % 2)
	const right = projects.filter((_, index) => !(index % 2))
	const renderProject = (project: ProjectType) => (<ProjectTeaser {...project} key={project.slug} />);

	return (
		<ModuleContainer>
			<div className={className}>
				<div>
					{left.map(renderProject)}
				</div>
				<div>
					{right.map(renderProject)}
				</div>
			</div>
		</ModuleContainer>
	);
};

export default styled(Projects)`
	display: flex;
	flex-direction: column;

	> div {
		display: block;

		&:first-child {
			margin-right: ${props => rem(props.theme.spacings.large)};
		}

		${tablet} {
			width: 50%;
		}
	}

	${tablet} {
		flex-direction: row;
	}
`;
