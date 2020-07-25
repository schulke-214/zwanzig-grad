import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import Layout from 'layouts/default';


interface PageProps {
	data: any;
}

const Page: FunctionComponent<PageProps> = ({ data }) => {
	const { contentfulSeite: {slug, title, description, keywords} } = data;

	return (
		<Layout>
			<h1>{title}</h1>
			<pre>
				/{slug}
			</pre>
			<p>{description}</p>
			<ul>
				{keywords.map((word: string) => <li>{word}</li>)}
			</ul>
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
