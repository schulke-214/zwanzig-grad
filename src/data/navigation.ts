import { graphql } from 'gatsby';

export const Navigation = graphql`
	fragment NavigationLink on ContentfulNavigationLink {
		id
		displayText
		linkTo {
			slug
		}
	}
`;
