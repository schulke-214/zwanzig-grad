import Logo from 'components/ui/logo/Logo';
import HeadlineLink from 'components/ui/links/headline-link/HeadlineLink';
import HoverLink from 'components/ui/links/hover-link/HoverLink';

import { Grid, Row, Col } from 'components/ui/grid/Grid';
import { ease, duration } from 'helper/animation';

import linkData from 'helper/link-data.json';

import './Menu.scss';

const MenuTopic = ({ children, className }) => (
	<h2 className={'menu__topic' + ' ' + className}>{children}</h2>
);

const Place = ({ title, children }) => (
	<div className='menu__place col-12'>
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
			new TimelineMax()
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
		new TimelineMax().to(this.menu.current, duration, { ease, y: '-100vh' }).to(
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
										<Logo />
									</Col>
								</Row>
								<Row className='menu__content-col display__none display-tablet-small__flex '>
									<Col>
										{linkData['secondary'].map(link => (
											<HoverLink
												href={link.route}
												key={link.name}
												newTab={link.newTab}
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
								<div className='menu__content-col row'>
									<div className='col'>
										{linkData['primary'].map(link => (
											<HeadlineLink href={link.route} key={link.name}>
												{link.name}
											</HeadlineLink>
										))}
									</div>
								</div>
							</Col>
							<Col
								width={{ default: 12, smallTablet: 4 }}
								className='display__none display-tablet-small__flex display__flex--flags --col'>
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
