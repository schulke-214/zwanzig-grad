import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';

import { tablet } from 'lib/media';
import { rem } from 'lib/polished';

import NavigationItem from 'components/layout/NavigationItem';
import MenuIcon from 'components/layout/MenuIcon';
import MenuOverlay from 'components/layout/MenuOverlay';


const NavigationContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	top: 0;
	left: 0;
	grid-column: 1 / span 2;
	grid-row: 1 / span 1;
	z-index: 10;
	background-color: ${props => props.theme.colors.background};
	padding: ${props => rem(props.theme.spacings.medium)};

	${tablet} {
		display: block;
		padding-top: ${props => rem(props.theme.spacings.large)};
		overflow-y: auto;
		grid-column: 1 / span 1;
		grid-row: 1 / span 2;
	}

	ul {
		list-style: none;
		display: block;
	}
`;

const NavigationMobileWrapper = styled.div`
	${tablet} {
		display: none;
	}
`;

const NavigationDesktopWrapper = styled.div`
	display: none;

	${tablet} {
		display: flex;
	}
`;

const NavigationSpacer = styled.li`
	height: ${props => rem(props.theme.spacings.xsmall)};
`;

const NavigationLogo = styled(Link)`
	z-index: ${props => props.theme.layers.overlay.content};
	position: relative;
	display: block;
	width: 4rem;
	height: 4rem;

	${tablet} {
		width: 100%;
		height: auto;
		margin-bottom: ${props => rem(props.theme.spacings.medium)};
	}

	img {
		display: block;
		margin: 0;

		${tablet} {
			display: block;
			width: 100%;
		}
	}
`;

interface NavigationProps {}

const Navigation: FunctionComponent<NavigationProps> = ({}) => {
	const [open, setOpen] = useState(false);
	const toggleOpen = () => setOpen(o => !o);

	const data = useStaticQuery(graphql`
		{
			allContentfulNavigation {
				edges {
					node {
						links {
							...NavigationLink

							... on ContentfulNavigationLink {
								internal {
									type
								}
							}

							... on ContentfulNavigationSpacer {
								internal {
									type
								}
								id
							}
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

	const nav = (
		<ul>
			{links.map((link: any) => {
				switch (link.internal.type) {
					case 'ContentfulNavigationSpacer':
						return <NavigationSpacer key={link.id} />;

					case 'ContentfulNavigationLink':
						return (
							<NavigationItem
								key={link.id}
								to={`/${link.linkTo.metadata.slug}`}
							>
								{link.displayText}
							</NavigationItem>
						);

					default:
						throw new Error('Unknown navigation item type! (' + link.internal.type + ')');
				}
			})}
		</ul>
	);

	return (
		<NavigationContainer>
			<NavigationLogo to="/" className="logo" onClick={() => setOpen(false)}>
				<img src={logo.file.url} />
			</NavigationLogo>
			<NavigationDesktopWrapper>{nav}</NavigationDesktopWrapper>
			<NavigationMobileWrapper>
				<MenuIcon
					open={open}
					onClick={toggleOpen}
					css={`
						right: -${(props: any) => rem(props.theme.spacings.small)};
					`}
				/>
				{open ? (
					<MenuOverlay
						css={`
							div {
								justify-content: flex-start;
								align-items: flex-start;
							}
						`}
					>
						{nav}
					</MenuOverlay>
				) : null}
			</NavigationMobileWrapper>
		</NavigationContainer>
	);
};

export default Navigation;
