import { ease, duration } from 'helper/animation';

import Logo from 'components/stateless/logo/Logo';
import HugeLink from 'components/links/huge-link/HugeLink';
import SmallLink from 'components/links/small-link/SmallLink';

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

	state = {
		mounted: false
	};

	componentDidUpdate(prevProps) {
		if (prevProps.open == this.props.open) return;

		if (this.props.open) {
			this.setState({ mounted: true }, this.open);
		} else {
			this.close().then(() => this.setState({ mounted: false }));
		}
	}

	open = () => {
		TweenLite.to(this.menu.current, duration, {
			ease,
			y: 0
		});

		TweenLite.to(this.backdrop.current, duration, {
			ease,
			backgroundColor: 'rgba(0,0,0,0.1)',
			pointerEvents: 'all'
		});
	};

	close = () =>
		new Promise((resolve, reject) => {
			TweenLite.to(this.menu.current, duration, {
				ease,
				y: '-100%'
			});

			TweenLite.to(this.backdrop.current, duration, {
				ease,
				backgroundColor: 'rgba(0,0,0,0)',
				pointerEvents: 'none',
				onComplete: resolve
			});
		});

	unmount = () => {
		this.setState({ mounted: false });
	};

	render() {
		if (!this.state.mounted) return <></>;

		return (
			<>
				<div className='menu' ref={this.menu}>
					<div className='menu__content'>
						<div className='container'>
							<div className='row'>
								<div className='col-12 col-tablet-small-3 offset-tablet-small-1 display__flex--flags --col'>
									<div className='row'>
										<div
											className='col-12 display__flex display__flex--flags --align-items-center'
											style={{ height: '40px' }}>
											<Logo />
										</div>
									</div>
									<div className='menu__content-col row display__none display-tablet-small__flex '>
										<div className='col'>
											<SmallLink href='/archiv'>archiv</SmallLink>
											<SmallLink href='/newsletter'>newsletter</SmallLink>
											<SmallLink href='/blog'>blog</SmallLink>
											<SmallLink href='/presse'>presse</SmallLink>
											<SmallLink href='/abc'>instagram</SmallLink>
										</div>
									</div>
								</div>
								<div className='col-12 col-tablet-small-4 display__flex display__flex--flags --col'>
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
								</div>
								<div className='col-tablet-small-4 display__none display-tablet-small__flex display__flex--flags --col'>
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
											Höfeweg XYZ <br />
											33624 Bielefeld <br />
											Deutschland <br />
										</Place>
									</div>
								</div>
							</div>
						</div>
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
