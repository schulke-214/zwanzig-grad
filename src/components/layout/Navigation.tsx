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

interface NavigationLinksProps {
	className?: string;
	onClick?: () => void;
}

export const NavigationLinks: FunctionComponent<NavigationLinksProps> = ({className, onClick}) => {
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

	return (
		<ul className={className}>
			{links?.map((link: any) => (
				<NavigationItem
					key={link.id}
					to={`/${link.linkTo.metadata.slug}`}
					onClick={onClick}
				>
					{link.displayText}
				</NavigationItem>
			))}
		</ul>
	);
};

interface NavigationProps {
	className?: string;
	onClose?: () => void;
}

const Navigation: FunctionComponent<NavigationProps> = ({ className, onClose }) => (
	<Overlay className={className}>
		<NavigationContent itemScope itemType="http://schema.org/SiteNavigationElement">
			<NavigationLinks onClick={onClose} />
		</NavigationContent>
		<NavigationContact />
	</Overlay>
);

export default Navigation;
