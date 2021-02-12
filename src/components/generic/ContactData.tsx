import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { phoneNumber } from 'utils/format';
import { rem } from 'lib/polished';


const ContactDataItem = styled.div`
	&:not(:last-child) {
		margin-bottom: ${props => rem(props.theme.spacings.medium)};
	}

	strong {
		display: block;
		font-weight: 500;
		margin-bottom: ${props => rem(props.theme.spacings.small)};
	}

	ul, div {
		margin-bottom: 0;
	}

	span {
		display: inline-block;
	}

	li {
		display: block;
	}

	li, span {
		&:not(:last-child) {
			margin-bottom: ${props => rem(props.theme.spacings.xsmall)};
		}
	}
`;


const ContactData: FunctionComponent<any> = ({className, children}) => {
	const data = useStaticQuery(
		graphql`
			query MetaContact {
				contactData: allContentfulMetaLegalKontakt {
					edges {
						node {
							city
							email
							houseNumber
							landline
							mobile
							owner
							postalCode
							street
							name
							legalName
						}
					}
				}
			}
		`
	);

	const contactData = data?.contactData?.edges[0]?.node ?? {};

	return (
		<div className={className} itemScope itemType="http://schema.org/Organization">
			<ContactDataItem>
				<meta itemProp="name" content={contactData.name} />
				<meta itemProp="legalName" content={contactData.legalName} />
				<meta itemProp="url" content={window.location.href} />

				<strong>Anschrift</strong>
				<div className="address" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
					<span itemProp="name">{contactData.legalName}</span><br />
					<span itemProp="streetAddress">{contactData.street} {contactData.houseNumber}</span><br />
					<span itemProp="postalCode">{contactData.postalCode}</span>{' '}
					<span itemProp="addressLocality">{contactData.city}</span><br />
					<meta itemProp="addressRegion" content="NRW" />
					<meta itemProp="addressCountry" content="Germany" />
				</div>
			</ContactDataItem>
			<ContactDataItem>
				<strong>Kontakt</strong>
				<ul className="contact">
					<li>
						<a itemProp="telephone" href={`tel:${contactData.landline}`} title="Rufen Sie uns an">
							{phoneNumber(contactData.landline)}
						</a>
					</li>
					<li>
						<a href={`tel:${contactData.mobile}`} title="Rufen Sie uns an">
							{phoneNumber(contactData.mobile)}
						</a>
					</li>
					<li>
						<a itemProp="email" href={`mailto:${contactData.email}`} title="Senden Sie uns eine E-Mail">
							{contactData.email}
						</a>
					</li>
				</ul>
			</ContactDataItem>
			{children}
		</div>
	);
}

export default ContactData;
