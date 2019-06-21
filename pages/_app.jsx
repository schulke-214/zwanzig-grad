import Application, { Container } from 'next/app';

import { Layout } from 'layout/default';

import 'styles/main.scss';

class App extends Application {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				{/* <Head /> */}

				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Container>
		);
	}
}

export default App;
