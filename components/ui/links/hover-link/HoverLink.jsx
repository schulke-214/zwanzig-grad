import Link from 'next/link';

import { ease, duration } from 'helper/animation';

import { GrayArea } from 'components/ui/links/gray-area/GrayArea';

import './HoverLink.scss';

class HoverLink extends React.Component {
	text = React.createRef();
	area = React.createRef();

	componentDidMount() {}

	enter = () => {
		this.area.current.show();

		TweenLite.to(this.text.current, duration / 2, {
			ease: Circ,
			x: 20
		});
	};

	leave = () => {
		this.area.current.hide();

		TweenLite.to(this.text.current, duration / 2, {
			ease: Circ,
			x: 0
		});
	};

	render() {
		const content = (
			<div
				onMouseEnter={this.enter}
				onMouseLeave={this.leave}
				className='hover-link'
				style={this.props.onlyContent ? this.props.style : {}}>
				<div className='hover-link__inner'>
					<span ref={this.text} style={this.props.style} className={this.props.className}>
						{this.props.children}
					</span>
					<GrayArea ref={this.area} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} />
				</div>
			</div>
		);

		if (this.props.onlyContent) {
			return content;
		}

		return (
			<Link href={this.props.href}>
				<a
					style={{ display: 'inline-block', width: 'min-content' }}
					target={this.props.newTab ? '_blank' : '_self'}>
					{content}
				</a>
			</Link>
		);
	}
}

export default HoverLink;
