import Link from 'next/link';

import Logo from 'components/ui/logo/Logo';
import ArrowLink from 'components/ui/links/arrow-link/ArrowLink';
import HoverLink from 'components/ui/links/hover-link/HoverLink';

import { Row, Col } from 'components/ui/grid/Grid';

import LINKS from 'components/ui/menu/Menu.json';

import './Footer.scss';

class Footer extends React.Component {
	render() {
		return (
			<footer className='footer container'>
				<Row>
					<Col
						width={{
							default: 12,
							tablet: 6
						}}>
						<h1 style={{ marginTop: -10 }}>Sie haben ein Projekt?</h1>
						<h2 className='typo--flags --ultra-light'>Erzählen Sie uns mehr</h2>

						<ArrowLink
							href='mailto:info@zwanzig-grad.de'
							className='footer__cta'
							style={{ textTransform: 'unset' }}
							newTab={true}>
							Schreiben Sie uns!
						</ArrowLink>
					</Col>
					<Col
						width={{
							default: 12,
							tablet: 6
						}}>
						<Row>
							<Col
								width={{
									default: 6
								}}
								className='display__flex display__flex--flags --col'>
								{LINKS['primary'].map(link => (
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
							<Col
								width={{
									default: 6
								}}
								className='display__flex display__flex--flags --col'>
								{LINKS['secondary'].map(link => (
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
						</Row>
					</Col>
				</Row>
				<Row>
					<Col
						width='12'
						className='display__flex display__flex--flags --row --justify-between --align-items-center'>
						<Link href='/'>
							<a>
								<Logo />
							</a>
						</Link>
						<div className='footer__bottom-links display__flex display__flex--flags --row --justify-end'>
							<HoverLink
								href='/privacy'
								style={{ textTransform: 'capitalize' }}
								className='typo--size-1 color--secondary-40'>
								privacy
							</HoverLink>
							<HoverLink
								href='/legal'
								style={{ textTransform: 'capitalize' }}
								className='typo--size-1 color--secondary-40'>
								legal
							</HoverLink>
						</div>
					</Col>
				</Row>
			</footer>
		);
	}
}

export default Footer;
