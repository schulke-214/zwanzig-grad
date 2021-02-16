import { graphql } from 'gatsby';

import { Page } from 'data/page';


export type NavigationLink = {
	id: string;
	displayText: string;
	linkTo: Page;
}

export const Navigation = graphql`
	fragment NavigationLink on ContentfulNavigationLink {
		id
		displayText
		linkTo {
			...Page
		}
	}
`;
