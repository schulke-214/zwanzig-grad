import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { NavigationLink } from 'data/navigation';

import ContactData, { ContactDataItem } from 'components/generic/ContactData';
import NavigationItem from 'components/layout/NavigationItem';
import { NavigationLinks } from 'components/layout/Navigation';

import { rem } from 'lib/polished';
import { tablet, landscape } from 'lib/media';


const FooterContainer = styled.footer`
	width: 100%;
	height: min-content;
	background-color: ${props => props.theme.colors.brand};
	padding: ${props => rem(props.theme.spacings.xlarge)} ${props => rem(props.theme.spacings.medium)};
	
	${tablet} {
		padding: ${props => rem(props.theme.spacings.xlarge * 2)} ${props => rem(props.theme.spacings.large)} ${props => rem(props.theme.spacings.xlarge)};
	}
`;

const FooterContent = styled.div`
	max-width: ${props => rem(props.theme.layout.maxWidth - 8 * props.theme.spacings.large)};
	margin: 0 auto;

	${ContactData} {
		padding-bottom: ${props => rem(props.theme.spacings.large)};
		border-bottom: 1px solid currentColor;

		${tablet} {
			display: flex;
			flex-direction: row;
		}

		> ${ContactDataItem} {
			${tablet} {
				margin-bottom: 0;
				width: 33.33%;

				&:not(:last-child) {
					margin-right: ${props => rem(props.theme.spacings.medium)};
				}
			}
		}
	}

	${NavigationItem} {
		font-size: unset;

		&::before {
			border-bottom-width: 1px;
		}
	}

	> ul {
		margin-bottom: 0;
		padding-top: ${props => rem(props.theme.spacings.large)};
		display: flex;
		flex-direction: column;

		${tablet} {
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}

		li {
			${tablet} {
				&:not(:last-child) {
					margin-bottom: 0;
					margin-right: ${props => rem(props.theme.spacings.medium)};
				}
			}
		}
	}
`;

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = ({}) => {
	const data = useStaticQuery(
		graphql`
			query MetaLegalConfig {
				config: allContentfulMetaLegalConfiguration {
					edges {
						node {
							imprint {
								...NavigationLink
							}
							dataPrivacy {
								...NavigationLink
							}
						}
					}
				}
			}
		`
	);

	const { imprint, dataPrivacy, additionalLinks = [] } = data.config.edges[0].node;
	const links: NavigationLink[] = [imprint, dataPrivacy, ...additionalLinks];

	return (
		<FooterContainer>
			<FooterContent>
				<ContactData>
					<ContactDataItem>
						<strong>Übersicht</strong>
						<NavigationLinks />
					</ContactDataItem>
				</ContactData>
				<ul>
					{links.map(link => (
						<NavigationItem
							key={link.id}
							to={`/${link.linkTo.metadata.slug}`}
							pageTitle={link.linkTo.title}
						>
							{link.displayText}
						</NavigationItem>
					))}
				</ul>
			</FooterContent>
		</FooterContainer>
	);
};

export default Footer;
