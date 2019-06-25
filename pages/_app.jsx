import Application, { Container } from 'next/app';
import Head from 'next/head';

import { Layout } from 'layout/default';

import 'helper/gsap/imports';
import 'styles/main.scss';

const { Grid } =
	process.env.NODE_ENV !== 'production'
		? require('helper/debug-grid/debug-grid.js')
		: { Grid: null };

const mountGrid = () => {
	// wipe all old instaces
	[...document.querySelectorAll('.debug-grid')].map(el => el.parentNode.removeChild(el));

	if (Grid) new Grid().mount();
};

class App extends Application {
	componentDidMount() {
		if (window) {
			mountGrid();
		}
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Head>
					<title>20° — Handwerk zum Wohnen</title>
				</Head>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Container>
		);
	}
}

export default App;
