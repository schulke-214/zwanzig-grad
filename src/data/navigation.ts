import { graphql } from 'gatsby';


export type NavigationLink = {
	id: string;
	displayText: string;
	linkTo: {
		metadata: {
			slug: string;
		}
	}
}

export default graphql`
	fragment NavigationLink on ContentfulNavigationLink {
		id
		displayText
		linkTo {
			metadata {
				slug
			}
		}
	}
`;
