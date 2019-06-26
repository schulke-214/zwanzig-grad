import { ease, duration } from 'helper/animation';

import './GrayArea.scss';

export class GrayArea extends React.Component {
	span = React.createRef();

	componentDidMount() {
		this.tl = new TimelineMax({ paused: true })
			.set(this.span.current, {
				transformOrigin: 'left'
			})
			.to(this.span.current, duration / 4, {
				ease: Circ,
				scaleX: 0.66
			})
			.addLabel('half')
			.to(this.span.current, duration / 4, {
				ease: Circ,
				scaleX: 1
			})
			.to(this.span.current, duration / 4, {
				ease: Circ,
				transformOrigin: 'right',
				scaleX: 0
			});
	}

	show = () => {
		this.tl.tweenFromTo(0, 'half');
	};

	hide = () => {
		this.tl.play();
	};

	render() {
		return <span ref={this.span} className='link__gray-area' style={this.props.style} />;
	}
}
