import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery, Link } from 'gatsby';

import { rem, transparentize } from 'lib/polished';

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
	grid-column: 1 / span 1;
	grid-row: 1 / span 1;
	z-index: 10;
	background-color: ${props => transparentize(0.05, props.theme.colors.background)};
	padding: ${props => rem(props.theme.spacings.medium)};

	ul {
		list-style: none;
		display: block;
	}
`;

const NavigationLogo = styled(Link)`
	z-index: ${props => props.theme.layers.overlay.content};
	position: relative;
	display: block;
	width: 4rem;
	height: 4rem;

	img {
		display: block;
		margin: 0;
	}
`;

interface NavigationProps {}

const Navigation: FunctionComponent<NavigationProps> = ({}) => {
	const [open, setOpen] = useState(false);
	const toggleOpen = () => setOpen(o => !o);
	const close = () => setOpen(false);

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

	const nav = (
		<ul>
			{links?.map((link: any) => (
				<NavigationItem
					key={link.id}
					to={`/${link.linkTo.metadata.slug}`}
					onClick={close}
				>
					{link.displayText}
				</NavigationItem>
			))}
		</ul>
	);

	return (
		<NavigationContainer itemScope itemType="http://schema.org/SiteNavigationElement">
			<NavigationLogo to="/" className="logo" onClick={close}>
				<img src={logo?.file?.url} />
			</NavigationLogo>
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
		</NavigationContainer>
	);
};

export default Navigation;
