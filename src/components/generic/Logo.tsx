import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';


const Logo: FunctionComponent<any> = ({ className, ...props }) => {
	const data = useStaticQuery(graphql`
		query Logo {
			allContentfulMetaSeoConfiguration {
				edges {
					node {
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

	const { logo } = data.allContentfulMetaSeoConfiguration.edges[0].node;

	return (
		<Link to="/" className={className} {...props}>
			<img src={logo?.file?.url} />
		</Link>
	);
}

export default styled(Logo)`
	z-index: ${props => props.theme.layers.overlay.content};
	position: relative;
	display: block;
	width: 4rem;
	height: 4rem;
	
	&::before {
		content: unset;
	}

	img {
		display: block;
		margin: 0;
	}
`;