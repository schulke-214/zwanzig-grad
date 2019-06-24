// import { ease, duration } from 'helper/animation';

import Link from 'next/link';

import './HugeLink.scss';

class HugeLink extends React.Component {
	link = React.createRef();
	span = React.createRef();

	componentDidMount() {}

	enter = () => {};

	leave = () => {};

	render() {
		return (
			<div
				ref={this.link}
				onMouseEnter={this.enter}
				onMouseLeave={this.leave}
				className='huge-link'>
				<Link href={this.props.href}>
					<a>
						<h1>{this.props.children}</h1>
					</a>
				</Link>
				<span ref={this.span} className='huge-link__grey-area' />
			</div>
		);
	}
}

export default HugeLink;
