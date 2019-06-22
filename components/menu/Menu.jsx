import { ease, duration } from 'helper/animation';

import Logo from 'components/logo/Logo';
import HugeLink from 'components/links/huge-link/HugeLink';
import SmallLink from 'components/links/small-link/SmallLink';

import './Menu.scss';

const MenuTopic = ({ children, className }) => (
	<h2 className={'menu__topic' + ' ' + className}>{children}</h2>
);

class Menu extends React.Component {
	menu = React.createRef();
	backdrop = React.createRef();

	componentDidMount() {
		this.tl = new TimelineLite({ paused: true });

		this.tl
			.to(
				this.menu.current,
				duration,
				{
					y: 0,
					ease
				},
				0
			)
			.to(
				this.backdrop.current,
				duration,
				{
					backgroundColor: 'rgba(0,0,0,0.1)',
					pointerEvents: 'all',
					ease
				},
				0
			);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.open == this.props.open) return;

		if (this.props.open) {
			this.tl.play();
		} else {
			this.tl.reverse();
		}
	}

	render() {
		//className={`menu ${this.props.open ? 'menu--open' : ''}`}> hi im the menu
		return (
			<>
				<div ref={this.menu} className='menu'>
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
										<SmallLink>archiv</SmallLink>
										<SmallLink>newsletter</SmallLink>
										<SmallLink>blog</SmallLink>
										<SmallLink>presse</SmallLink>
										<SmallLink>instagram</SmallLink>
									</div>
								</div>
							</div>
							<div className='col-12 col-tablet-small-4 display__flex display__flex--flags --col'>
								<MenuTopic className='display__none display-tablet-small__block'>
									Inhalte
								</MenuTopic>
								<div className='menu__content-col row'>
									<div className='col'>
										<HugeLink>Arbeiten</HugeLink>
										<HugeLink>Über Uns</HugeLink>
										<HugeLink>Neuigkeiten</HugeLink>
										<HugeLink>Stellenangebote</HugeLink>
										<HugeLink>Kontakt</HugeLink>
									</div>
								</div>
							</div>
							<div className='col-tablet-small-4 display__none display-tablet-small__flex display__flex--flags --col'>
								<MenuTopic className='display__none display-tablet-small__block'>
									Räumlichkeiten
								</MenuTopic>
								<div className='menu__content-col row' />
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
