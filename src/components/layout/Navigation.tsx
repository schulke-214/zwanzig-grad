import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Overlay from 'components/ui/Overlay';
import ContactData from 'components/generic/ContactData';
import NavigationItem from 'components/layout/NavigationItem';

import { tablet } from 'lib/media';
import { rem } from 'lib/polished';


const NavigationContact = styled(ContactData)`
	position: absolute;
	top: 0;
	left: 0;
	display: none;
	height: 100vh;
	padding: ${props => rem(props.theme.spacings.xlarge)};
	padding-left: 12.5%;
	background-color: ${props => props.theme.colors.brand};

	${tablet} {
		display: flex;
		width: 40%;
		flex-direction: column;
		justify-content: center;
		align-items: left;
	}
`;

const NavigationContent = styled.nav`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	width: 100%;
	height: 100vh;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: ${props => rem(props.theme.spacings.xlarge)};

	${tablet} {
		padding-left: 15%;
		width: 60%;
		align-items: flex-start;
	}

	ul {
		margin-bottom: 0;
	}
`;

interface NavigationProps {
	className?: string;
}

const Navigation: FunctionComponent<NavigationProps> = ({ className, children }) => {
	const data = useStaticQuery(graphql`
		{
			allContentfulNavigation {
				edges {
					node {
						links {
							...NavigationLink
						}
					}
				}
			}
		}
	`);

	const { links } = data.allContentfulNavigation.edges[0].node;

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
		<Overlay className={className}>
			<NavigationContent itemScope itemType="http://schema.org/SiteNavigationElement">
				{nav}
			</NavigationContent>
			<NavigationContact />
		</Overlay>
	);
}

export default Navigation;
