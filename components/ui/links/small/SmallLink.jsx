// import { ease, duration } from 'helper/animation';
import Link from 'next/link';

import './SmallLink.scss';

class SmallLink extends React.Component {
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
				className='small-link'>
				<Link href={this.props.href}>
					<a>{this.props.children}</a>
				</Link>
				<span ref={this.span} className='small-link__grey-area' />
			</div>
		);
	}
}

export default SmallLink;
