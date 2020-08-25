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
							file {
								url
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
				<img src={logo.file.url} />
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
	z-index: 10;
	background-color: ${props => props.theme.colors.background};
	padding: ${props => rem(props.theme.spacings.medium)};

	> a {
		position: relative;
		display: block;
		width: 2.5rem;
		height: 2.5rem;

		${tablet} {
			width: 100%;
			height: auto;
			margin-bottom: ${props => rem(props.theme.spacings.medium)};
		}

		img {
			margin: 0;

			${tablet} {
				display: block;
				width: 100%;
				height: 100%;
			}
		}
	}

	ul {
		list-style: none;
		display: none;

		${tablet} {
			display: block;
		}
	}
`;
