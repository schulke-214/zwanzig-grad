import React, {FunctionComponent} from 'react';

import Layout from 'layouts/default';

import SEO from 'components/layout/SEO';


const PageNotFoundError: FunctionComponent<{}> = () => (
	<Layout>
		<SEO
			title={'404'}
			slug={'/404'}
			description={'Seite nicht gefunden.'}
		/>
		<h1>Seite nicht gefunden.</h1>
	</Layout>
)

export default PageNotFoundError;
