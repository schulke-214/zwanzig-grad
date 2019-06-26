import Link from 'next/link';

import { GrayArea } from 'components/ui/links/gray-area/GrayArea';

import './HeadlineLink.scss';

class HeadlineLink extends React.Component {
	area = React.createRef();

	enter = () => {
		this.area.current.show();
	};

	leave = () => {
		this.area.current.hide();
	};

	render() {
		return (
			<div
				onMouseEnter={this.enter}
				onMouseLeave={this.leave}
				className={`headline-link ${this.props.className}`}>
				<Link href={this.props.href}>
					<a>
						<h1>{this.props.children}</h1>
					</a>
				</Link>
				<GrayArea ref={this.area} />
			</div>
		);
	}
}

export default HeadlineLink;
