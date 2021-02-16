import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { Subpage } from 'data/page';

import PageTemplate from 'templates/page';


interface SubPageProps {
	data: {
		page: Subpage;
	};
}

const SubPage: FunctionComponent<SubPageProps> = PageTemplate;

export const query = graphql`
	query SubPageQuery($slug: String) {
		page: contentfulSeiteUnterseite(metadata: {slug: {eq: $slug}}) {
			...Subpage
		}
	}
`;

export default SubPage;
