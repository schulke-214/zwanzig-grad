import { graphql } from 'gatsby';

import { CMSRichText, CMSResponsiveImage } from 'data/cms';


export type Employee = {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	position: string;
	since: string;
	slug: string;
	portrait: CMSResponsiveImage;
	description: CMSRichText;
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

			# id
			# fixed(width: 800, height: 1200) {
			# 	src
			# 	srcSet
			# }
		}
		description {
			raw
		}
	}
`;
