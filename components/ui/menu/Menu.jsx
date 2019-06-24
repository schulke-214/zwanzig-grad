import { Grid, Row, Col } from 'components/ui/grid/Grid';
import Logo from 'components/ui/logo/Logo';

import { ease, duration } from 'helper/animation';

import MenuButton from './menu-button/MenuButton';

// import Logo from 'components/stateless/logo/Logo';
// import HugeLink from 'components/links/huge-link/HugeLink';
// import SmallLink from 'components/links/small-link/SmallLink';

import './Menu.scss';

const MenuTopic = ({ children, className }) => (
	<h2 className={'menu__topic' + ' ' + className}>{children}</h2>
);

const Place = ({ title, children }) => (
	<div className='menu__place col-12'>
		<h4 className='typo-flags --primary --letter-spacing-wide --medium'>{title}</h4>
		<p className='typo-flags --letter-spacing-wide --light'>{children}</p>
	</div>
);

class Menu extends React.Component {
	menu = React.createRef();
	backdrop = React.createRef();

	// componentDidMount() {}

	// show = () => {
	// 	new TimelineLite();
	// };

	// componentDidUpdate(prevProps) {
	// 	if (prevProps.open == this.props.open) return;

	// 	if (this.props.open) {
	// 		this.setState({ mounted: true }, this.open);
	// 	} else {
	// 		this.close().then(() => this.setState({ mounted: false }));
	// 	}
	// }

	// open = () => {
	// 	new TimelineLite()
	// 		.to(this.menu.current, duration, {
	// 			ease,
	// 			y: 0
	// 		})
	// 		.to(
	// 			this.backdrop.current,
	// 			duration,
	// 			{
	// 				ease,
	// 				backgroundColor: 'rgba(0,0,0,0.1)',
	// 				pointerEvents: 'all'
	// 			},
	// 			0
	// 		);
	// };

	// close = () =>
	// 	new Promise((resolve, reject) => {
	// 		new TimelineLite({ onComplete: resolve })
	// 			.to(this.menu.current, duration, {
	// 				ease,
	// 				y: '-100%'
	// 			})
	// 			.to(
	// 				this.backdrop.current,
	// 				duration,
	// 				{
	// 					ease,
	// 					backgroundColor: 'rgba(0,0,0,0)',
	// 					pointerEvents: 'none'
	// 				},
	// 				0
	// 			);
	// 	});

	// unmount = () => {
	// 	this.setState({ mounted: false });
	// };

	render() {
		return (
			<>
				<div className='menu' ref={this.menu}>
					<div className='menu__content'>
						<Grid>
							<Row>
								{/* <Col
									width={{ default: 12, smallTablet: 4 }}
									offset={{ smallTablet: 1 }}
									className='display__flex--flags --col'>
									<Row>
										<Col
											width={12}
											className='display__flex display__flex--flags --align-items-center'
											style={{ height: '40px' }}>
											<Logo />
										</Col>
									</Row>
									<Row className='menu__content-col display__none display-tablet-small__flex '>
										<Col>
											<SmallLink href='/archiv'>archiv</SmallLink>
											<SmallLink href='/newsletter'>newsletter</SmallLink>
											<SmallLink href='/blog'>blog</SmallLink>
                                            <SmallLink href='/presse'>presse</SmallLink>
                                            <SmallLink href='/abc'>instagram</SmallLink>
										</Col>
									</Row>
								</Col> */}
								{/* <Col
									width={{ default: 12, smallTablet: 4 }}
									className='display__flex display__flex--flags --col'>
									<MenuTopic className='display__none display-tablet-small__block'>
										Inhalte
									</MenuTopic>
									<div className='menu__content-col row'>
										<div className='col'>
											<HugeLink href='/work'>Arbeiten</HugeLink>
											<HugeLink href='/about'>Über Uns</HugeLink>
											<HugeLink href='/news'>Neuigkeiten</HugeLink>
											<HugeLink href='/jobs'>Stellenangebote</HugeLink>
											<HugeLink href='/contact'>Kontakt</HugeLink>
										</div>
									</div>
								</Col> */}
								{/* <Col className='display__none display-tablet-small__flex display__flex--flags --col'>
									<MenuTopic className='display__none display-tablet-small__block'>
										Räumlichkeiten
									</MenuTopic>
									<div className='menu__content-col row'>
										<Place title='Hauptbüro'>
											Wertherstraße 310 <br />
											33619 Bielefeld <br />
											Deutschland <br />
										</Place>

										<Place title='Werktstatt'>
											Höfeweg 80 <br />
											33619 Bielefeld <br />
											Deutschland <br />
										</Place>
									</div>
								</Col> */}
							</Row>
						</Grid>
					</div>
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
