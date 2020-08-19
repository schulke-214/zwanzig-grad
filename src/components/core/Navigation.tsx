import React, { FunctionComponent } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { tablet } from 'lib/media';
import { rem } from 'lib/polished';


interface NavigationProps {
	className?: string
}

const Navigation: FunctionComponent<NavigationProps> = ({ className }) => {
	const data = useStaticQuery(graphql`
		{
			allContentfulNavigation {
				edges {
					node {
						links {
							...NavigationLink
						}
						logo {
							fixed {
								src
							}
						}
					}
				}
			}
		}
	`);
	const { links, logo } = data.allContentfulNavigation.edges[0].node;

	return (
		<nav className={className}>
			<Link to="/">
				<img src={logo.fixed.src} />
			</Link>
			<ul>
				{links.map((link: any) => (
					<li key={link.id}>
						<Link to={`/${link.linkTo.metadata.slug}`}>
							{link.displayText}
						</Link>
					</li>	
				))}
			</ul>
		</nav>
	);
}

export default styled(Navigation)`
	padding: ${props => rem(props.theme.spacings.medium)};

	> a {
		display: block;
		width: 2.5rem;
		height: 2.5rem;
		margin-bottom: ${props => rem(props.theme.spacings.medium)};
		background-color: ${props => props.theme.colors.brand};

		${tablet} {
			width: 100%;
			padding-top: 100%;
		}

		img {
			display: none;
		}
	}

	ul {
		list-style: none;
	}
`;
