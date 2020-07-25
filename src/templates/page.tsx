import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import Layout from 'layouts/default';


interface PageProps {
	data: any;
}

const Page: FunctionComponent<PageProps> = ({ data }) => {
	const { contentfulSeite: {slug, title} } = data;

	return (
		<Layout>
			<h1>{title}</h1>
			<pre>/{slug}</pre>
		</Layout>
	);
};

export const query = graphql`
	query PageQuery($slug: String!) {
		contentfulSeite(slug: { eq: $slug }) {
			slug
			title
			layout {
				content {
					... on ContentfulLayoutSlider {
						id
						title
						images {
							title
						}
					}
				}
			}
		}
	}
`;

export default Page;
