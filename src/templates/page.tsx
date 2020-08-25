import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import Layout from 'layouts/default';

import PageLayout from 'components/PageLayout';


interface PageProps {
	data: any;
}

const Page: FunctionComponent<PageProps> = ({ data }) => {
	const {
		contentfulSeite: {
			title,
			metadata: {
				slug
			},
			layout
		}
	} = data;

	return (
		<Layout>
			<PageLayout {...layout} />
		</Layout>
	);
};

export const query = graphql`
	query PageQuery($slug: String) {
		contentfulSeite(metadata: {slug: {eq: $slug }}) {
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

export default Page;
