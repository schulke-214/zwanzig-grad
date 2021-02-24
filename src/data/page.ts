import { graphql } from 'gatsby';

import { Layout } from 'data/layout';


export type Page = {
	slug: string;
	title: string;
	metadata: PageMetaData;
	layout: Layout;
};

export type Subpage = Page;

export type PageMetaData = {
	id: string;
	slug: string;
	description: string;
	keywords: string[];
};

export const Page = graphql`
	fragment Page on ContentfulSeite {
		id
		title
		layout {
			...Layout
		}
		metadata {
			...PageMetaData
		}
#		subpages {
#			...Subpage
#		}
	}

#	fragment Subpage on ContentfulSeiteUnterseite {
#		id
#		title
#		layout {
#			...Layout
#		}
#		metadata {
#			...PageMetaData
#		}
#	}

	fragment PageMetaData on ContentfulSeiteMetadaten {
		id
		slug
		description
		keywords
	}
`;
