import Link from 'next/link';

import Logo from 'components/logo/Logo';
import Menu from 'components/menu/Menu';
import MenuButton from 'components/menu/menu-button/MenuButton';

import './Header.scss';

class Header extends React.Component {
	state = {
		menu: false
	};

	closeMenu = () => {
		this.setState({
			menu: false
		});
	};

	toggleMenu = () => {
		this.setState(state => ({
			menu: !state.menu
		}));
	};

	render() {
		return (
			<header className='header'>
				<Menu open={this.state.menu} handleClose={this.closeMenu} />
				<div className='container'>
					<div className='row'>
						<div className='header__content col'>
							<Link href='/'>
								<a>
									<Logo />
								</a>
							</Link>

							<MenuButton open={this.state.menu} onClick={this.toggleMenu} />
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
