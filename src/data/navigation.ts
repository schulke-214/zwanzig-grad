import { graphql } from 'gatsby';


export type NavigationLink = {
	id: string;
	displayText: string;
	linkTo: {
		title: string;
		metadata: {
			slug: string;
		}
	}
}

export const Navigation = graphql`
	fragment NavigationLink on ContentfulNavigationLink {
		id
		displayText
		linkTo {
			title
			metadata {
				slug
			}
		}
	}
`;
