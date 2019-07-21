import './HoverImage.scss';

import { smoothEase, duration } from 'helper/animation';

class HoverImage extends React.Component {
	container = React.createRef();
	image = React.createRef();

	componentDidMount() {
		this.tl = new TimelineMax({ paused: true })
			.to(
				this.container.current,
				duration / 2,
				{
					ease: smoothEase,
					scale: 0.95
				},
				0
			)
			.to(
				this.image.current,
				duration / 2,
				{
					ease: smoothEase,
					scale: 1.2
				},
				0
			);
	}

	play = () => {
		this.tl.play();
	};

	reverse = () => {
		this.tl.reverse();
	};

	render() {
		return (
			<div
				className='hover-image'
				ref={this.container}
				onMouseEnter={this.play}
				onMouseLeave={this.reverse}>
				<img src={this.props.src} ref={this.image} />
			</div>
		);
	}
}

export default HoverImage;
