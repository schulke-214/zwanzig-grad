import { graphql } from 'gatsby';

import { CMSResponsiveImage } from 'data/cms';


export type Employee = {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	position: string;
	since: string;
	slug: string;
	portrait: CMSResponsiveImage;
};

export const Employee = graphql`
	fragment Employee on ContentfulMitarbeiter {
		phone
		lastName
		firstName
		email
		position
		since(formatString: "DD.MM.YYYY")
		slug
		portrait {
			...CMSImage
		}
	}
`;
