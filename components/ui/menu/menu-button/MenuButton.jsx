import { ease, duration } from 'helper/animation';

import './MenuButton.scss';

class MenuButton extends React.Component {
	top = React.createRef();
	bot = React.createRef();

	componentDidMount() {
		this.tl = new TimelineLite({ paused: true });

		this.tl
			.to(
				this.top.current,
				duration,
				{
					y: 3,
					rotation: 45,
					ease
				},
				0
			)
			.to(
				this.bot.current,
				duration,
				{
					y: -3,
					rotation: -45,
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
		return (
			<button className='menu-button' onClick={this.props.onClick}>
				<span ref={this.top} className='menu-button__top' />
				<span className='menu-button__content'>Open menu</span>
				<span ref={this.bot} className='menu-button__bot' />
			</button>
		);
	}
}

export default MenuButton;
