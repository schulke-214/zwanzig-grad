import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import Layout from 'layouts/default';

import PageLayout from 'components/PageLayout';
import SEO from 'components/layout/SEO';


interface PageProps {
	data: any;
}

const Page: FunctionComponent<PageProps> = ({ data }) => {
	const {
		contentfulSeite: {
			title,
			metadata: {
				slug,
				description,
				keywords
			},
			layout
		}
	} = data;

	return (
		<Layout>
			<SEO
				title={title}
				slug={slug}
				description={description}
				keywords={keywords}
			/>
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
