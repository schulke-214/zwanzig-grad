import './Menu.scss';

class Menu extends React.Component {
	render() {
		return (
			<>
				<div className={`menu ${this.props.open ? 'menu--open' : ''}`}>hi im the menu</div>
				<div className='menu__backdrop' onClick={this.props.handleClose} />
			</>
		);
	}
}

export default Menu;
