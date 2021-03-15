import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import PageLayout from 'components/PageLayout';
import SEO from 'components/layout/SEO';

import { Page as PageType } from 'data/page';

import Layout from 'layouts/default';


interface PageProps {
	data: {
		page: PageType;
	};
}

const Page: FunctionComponent<PageProps> = ({ data }) => {
	const { page } = data;

	return (
		<Layout>
			<SEO
				title={page.title}
				slug={page.metadata.slug}
				description={page.metadata.description}
				keywords={page.metadata.keywords}
			/>
			<PageLayout page={page} />
		</Layout>
	);
};

export const query = graphql`
	query PageQuery($slug: String) {
		page: contentfulSeite(metadata: {slug: {eq: $slug}}) {
			...Page
		}
	}
`;

export default Page;
