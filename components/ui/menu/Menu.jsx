import Link from 'next/link';

import Logo from 'components/ui/logo/Logo';
import HeadlineLink from 'components/ui/links/headline-link/HeadlineLink';
import HoverLink from 'components/ui/links/hover-link/HoverLink';

import { Grid, Row, Col } from 'components/ui/grid/Grid';
import { ease, duration } from 'helper/animation';
import { disableScrolling, enableScrolling } from 'helper/scrolling';

import LINKS from ',/Menu.json';

import './Menu.scss';

const MenuTopic = ({ children, className }) => (
	<h2 className={'menu__topic' + ' ' + className}>{children}</h2>
);

const Place = ({ title, children, className }) => (
	<div className={`menu__place col-12 ${className}`}>
		<h4 className='typo--flags --primary --letter-spacing-wide --medium'>{title}</h4>
		<p className='typo--flags --letter-spacing-wide --light'>{children}</p>
	</div>
);

class Menu extends React.Component {
	menu = React.createRef();
	backdrop = React.createRef();

	state = {
		mounted: false
	};

	componentDidMount() {
		addEventListener('resize', this.tryToUnmount);
	}

	componentWillUnmount() {
		removeEventListener('resize', this.tryToUnmount);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.open == this.props.open) return;

		if (this.props.open) {
			this.open();
		} else {
			this.close();
		}
	}

	tryToUnmount = () => {
		if (this.props.open) return;

		this.setState({ mounted: false });
	};

	open = () => {
		this.setState({ mounted: true }, () => {
			// const contentColumns = [
			// 	...this.menu.current.querySelectorAll('.menu__content-col')
			// ].map(col => [...col.querySelectorAll('.menu__fly-in')]);

			// const fadeInParams = {
			// 	ease: Expo,
			// 	y: -25,
			// 	opacity: 0
			// };

			/*
            				.staggerFrom(
					contentColumns[0],
					duration * 1.5,
					fadeInParams,
					0.25 / contentColumns[0].length,
					0.5
				)
				.staggerFrom(
					contentColumns[1],
					duration * 1.5,
					fadeInParams,
					0.25 / contentColumns[1].length,
					0.5
				)
				.staggerFrom(
					contentColumns[2],
					duration * 1.5,
					fadeInParams,
					0.25 / contentColumns[2].length,
					0.5
                )
            */

			new TimelineMax({ onStart: disableScrolling })
				.to(this.menu.current, duration, {
					ease,
					y: 0
				})
				.to(
					this.backdrop.current,
					duration,
					{
						ease,
						backgroundColor: 'rgba(0,0,0,0.1)',
						pointerEvents: 'all'
					},
					0
				);
		});
	};

	close = () => {
		new TimelineMax({ onStart: enableScrolling })
			.to(this.menu.current, duration, { ease, y: '-100vh' })
			.to(
				this.backdrop.current,
				duration,
				{
					ease,
					backgroundColor: 'rgba(0,0,0,0.0)',
					pointerEvents: 'none'
				},
				0
			);
	};

	render() {
		if (!this.state.mounted) return <></>;

		return (
			<>
				<div ref={this.menu} className='menu'>
					<Grid>
						<Row>
							<Col
								width={{ default: 12, smallTablet: 3 }}
								offset={{ smallTablet: 1 }}
								className='display__flex--flags --col'>
								<Row>
									<Col
										width={12}
										className='display__flex display__flex--flags --align-items-center'
										style={{ height: '40px' }}>
										<Link href='/'>
											<a>
												<Logo />
											</a>
										</Link>
									</Col>
								</Row>
								<Row className='menu__content-col display__none display-tablet-small__flex '>
									<Col className='display__flex display__flex--flags --col'>
										{LINKS['secondary'].map(link => (
											<HoverLink
												href={link.route}
												key={link.name}
												newTab={link.newTab}
												className='menu__fly-in'
												style={{ fontWeight: 'bold' }}>
												{link.name}
											</HoverLink>
										))}
									</Col>
								</Row>
							</Col>
							<Col
								width={{ default: 12, smallTablet: 4 }}
								className='display__flex display__flex--flags --col'>
								<MenuTopic className='display__none display-tablet-small__block'>
									Inhalte
								</MenuTopic>
								<Row className='menu__content-col'>
									<Col className='display__flex display__flex--flags --col'>
										{LINKS['primary'].map(link => (
											<HeadlineLink
												href={link.route}
												key={link.name}
												className='menu__fly-in'>
												{link.name}
											</HeadlineLink>
										))}
									</Col>
								</Row>
							</Col>
							<Col
								width={{ default: 12, smallTablet: 4 }}
								className='display__none display-tablet-small__flex display__flex--flags --col'>
								<MenuTopic className='display__none display-tablet-small__block'>
									Räumlichkeiten
								</MenuTopic>
								<div className='menu__content-col row'>
									<Place className='menu__fly-in' title='Hauptbüro'>
										Wertherstraße 310 <br />
										33619 Bielefeld <br />
										Deutschland <br />
									</Place>

									<Place className='menu__fly-in' title='Werktstatt'>
										Höfeweg 80 <br />
										33619 Bielefeld <br />
										Deutschland <br />
									</Place>
								</div>
							</Col>
						</Row>
					</Grid>
				</div>
				<div
					ref={this.backdrop}
					className='menu__backdrop'
					onClick={this.props.handleClose}
				/>
			</>
		);
	}
}

export default Menu;
