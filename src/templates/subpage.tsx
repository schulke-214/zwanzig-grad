import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import PageTemplate from './page';


interface SubPageProps {
	data: any;
}

const SubPage: FunctionComponent<SubPageProps> = ({ data: {contentfulSeiteUnterseite} }) => (
	<PageTemplate
		data={{
			contentfulSeite: contentfulSeiteUnterseite
		}}
	/>
);

export const query = graphql`
	query SubPageQuery($slug: String) {
		contentfulSeiteUnterseite(metadata: {slug: {eq: $slug }}) {
			title
			metadata {
				slug
				description
				keywords
			}
			layout {
				...Layout
			}
		}
	}
`;

export default SubPage;
