import React, {FunctionComponent} from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from 'layouts/default';
import PageLayout from 'components/PageLayout';


const Home: FunctionComponent<{}> = () => {
	const data = useStaticQuery(graphql`
		{
			allContentfulStartseite {
				edges {
					node {
						layout {
							...Layout
						}
					}
				}
			}
		}
	`);

	const { layout } = data.allContentfulStartseite.edges[0].node;

	return (
		<Layout>
			<PageLayout {...layout} />
		</Layout>
	);
}


export default Home;
