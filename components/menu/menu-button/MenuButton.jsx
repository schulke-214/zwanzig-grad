import anime, { ease } from 'helper/animation';

import './MenuButton.scss';

class MenuButton extends React.Component {
	btn = React.createRef();
	// tl = anime.timeline({ easing:  })

	componentDidMount() {
		console.log(anime, ease);
		// 	this.tl.to(this.btn, 0.5, { opacity: 0 });
	}

	// componentDidUpdate() {
	// 	this.tl.reverse();
	// }

	render() {
		return (
			<button
				ref={this.btn}
				className={`menu-button`} // ${this.props.open ? 'menu-button--open' : ''}`}
				onClick={this.props.onClick}>
				<span>Open menu</span>
			</button>
		);
	}
}

export default MenuButton;
