import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import Layout from 'layouts/default';

import PageLayout from 'components/PageLayout';


interface PageProps {
	data: any;
}

const Page: FunctionComponent<PageProps> = ({ data }) => {
	const { contentfulSeite: {slug, title, description, keywords, layout} } = data;

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
	query PageQuery($slug: String!) {
		contentfulSeite(slug: { eq: $slug }) {
			slug
			title
			description
			keywords
			layout {
				...Layout
			}
		}
	}
`;

export default Page;
