// import { ease, duration } from 'helper/animation';

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
				<a>{this.props.children}</a>
				<span ref={this.span} className='small-link__grey-area' />
			</div>
		);
	}
}

export default SmallLink;
