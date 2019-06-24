import Application, { Container } from 'next/app';
import Head from 'next/head';

import { Layout } from 'layout/default';

import 'helper/gsap/imports';
import 'styles/main.scss';

class App extends Application {
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
