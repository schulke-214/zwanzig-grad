import Link from 'next/link';

import Logo from 'components/ui/logo/Logo';

import Menu from 'components/ui/menu/Menu';
import MenuButton from 'components/ui/menu/menu-button/MenuButton';

import { Grid, Row, Col } from 'components/ui/grid/Grid';

import './Navigation.scss';

class Navigation extends React.Component {
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
			<header className='navigation'>
				<Menu open={this.state.menu} handleClose={this.closeMenu} />
				<Grid>
					<Row>
						<Col width='12' className='navigation__content display__flex'>
							<Link href='/'>
								<a>
									<Logo />
								</a>
							</Link>

							<MenuButton open={this.state.menu} onClick={this.toggleMenu} />
						</Col>
					</Row>
				</Grid>
			</header>
		);
	}
}

export default Navigation;
