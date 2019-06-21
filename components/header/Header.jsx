import Logo from 'components/logo/Logo';

import './Header.scss';

class Header extends React.Component {
	render() {
		return (
			<header className='header'>
				<div className='container'>
					<div className='row'>
						<div className='col-8 col-tablet-6 col-phone-4'>
							<a
								className='_2OkMYzlOrP IKG3xNgIyM'
								aria-current='true'
								aria-label='Home'
								href='/'>
								<Logo />
							</a>
							<a className='_1kbGhVjS43' href='/contact'>
								Contact
							</a>
						</div>
						<div className='col-4'>
							<div className='_2JbzSFTFOL'>
								<div className='EaI_VfoxO1'>
									<div className='_1XJxh7778p'>
										<button className='gUD9C0--Jf'>
											<span className='_1wvd45e0_t'>Open menu</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
