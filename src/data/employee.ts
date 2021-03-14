import { graphql } from 'gatsby';


export type Employee = {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	position: string;
	since: string;
	slug: string;
	portrait: {
		id: string;
		fixed: {
			src: string;
			srcSet: string;
		}
	};
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
			id
			fixed(width: 800, height: 1200) {
				src
				srcSet
			}
		}
	}
`;
