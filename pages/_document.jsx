import Document, { Head, Main, NextScript } from 'next/document';

import pkg from '../package.json';
import icons from 'static/icon/map';

class AppDocument extends Document {
	render() {
		return (
			<html lang='en'>
				<Head>
					<meta charSet='UTF-8' />
					<meta
						name='viewport'
						content='initial-scale=1.0, width=device-width'
						key='viewport'
					/>
					<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
					<meta
						name='description'
						content='Handwerk zum wohnen - Professionell, Hochwertig, Zuverlässig - Seit 20 Jahren.'
					/>
					<meta name='theme-color' content={pkg.theme} />
					<meta name='msapplication-TileColor' content={pkg.theme} />
					<meta name='theme-color' content={pkg.theme} />
					<meta
						name='msapplication-TileImage'
						content='/static/icon/ms-icon-144x144.png'
					/>

					{icons.map(props => (
						<link {...props} key={props.rel + '-' + props.sizes} />
					))}

					<link rel='stylesheet' href='/static/fonts/fonts.css' type='text/css' />

					<script src='https://unpkg.com/masonry-layout@4.2.2/dist/masonry.pkgd.min.js' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

export default AppDocument;
