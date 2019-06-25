import HoverLink from 'components/ui/links/hover-link/HoverLink';

import { Row, Col } from 'components/ui/grid/Grid';

import linkData from 'helper/link-data.json';

import './Footer.scss';

class Footer extends React.Component {
	render() {
		return (
			<footer className='footer container'>
				<Row>
					<Col width='6'>
						<h1>Haben Sie ein Projekt?</h1>
						<h2 className='typo--flags --ultra-light'>
							Erzählen Sie uns Einzelheiten!
						</h2>
					</Col>
					<Col width='6'>
						<Row>
							<Col width='4' className='display__flex display__flex--flags --col'>
								{linkData['primary'].map(link => (
									<HoverLink
										href={link.route}
										key={link.name}
										newTab={link.newTab}
										style={{ textTransform: 'capitalize' }}
										className='typo--size-1 color--secondary-40'>
										{link.name}
									</HoverLink>
								))}
							</Col>
							<Col width='4' className='display__flex display__flex--flags --col'>
								{linkData['secondary'].map(link => (
									<HoverLink
										href={link.route}
										key={link.name}
										newTab={link.newTab}
										style={{ textTransform: 'capitalize' }}
										className='typo--size-1 color--secondary-40'>
										{link.name}
									</HoverLink>
								))}{' '}
							</Col>
						</Row>
					</Col>
				</Row>
			</footer>
		);
	}
}

export default Footer;
