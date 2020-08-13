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
				// description,
				// keywopage.node.metadata.slugrds
			},
			layout
		}
	} = data;

	return (
		<Layout>
			<h1>{title}</h1>
			<pre>
				/{slug}
			</pre>
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
