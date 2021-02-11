import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Overlay from 'components/ui/Overlay';
import NavigationItem from 'components/layout/NavigationItem';

import { tablet } from 'lib/media';
import { rem } from 'lib/polished';


const UnstyledNavigationContact: FunctionComponent<any> = ({className}) => {
	return (
		<div className={className}>
			<div>
				<meta itemProp="name" content="Moccu – Digital Experience" />
				<meta itemProp="legalName" content="Moccu GmbH &amp; Co. KG" />
				<meta itemProp="url" content="https://www.moccu.com/" />

				<strong>Anschrift</strong>
				<div className="address" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
					<span itemProp="name">Moccu GmbH &amp; Co. KG</span><br />
					<span itemProp="streetAddress">Am Treptower Park 28-30</span><br />
					<span itemProp="postalCode">12435</span>
					<span itemProp="addressLocality">Berlin</span><br />
					<meta itemProp="addressRegion" content="Berlin" />
					<meta itemProp="addressCountry" content="Germany" />
				</div>
			</div>
			<div>
				<strong>Kontakt</strong>
				<ul className="contact">
					<li>
						<a itemProp="telephone" href="tel:+493044013030" title="Rufen Sie uns an">
							+49 30 44 01 30 30
						</a>
					</li>
					<li>
						<a itemProp="email" href="mailto:hello@moccu.com" title="Senden Sie uns eine E-Mail">
							hello@moccu.com
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

const NavigationContact = styled(UnstyledNavigationContact)`
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
