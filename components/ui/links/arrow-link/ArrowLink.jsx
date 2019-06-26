import Link from 'next/link';
import HoverLink from 'components/ui/links/hover-link/HoverLink';

import './ArrowLink.scss';
import { duration, ease } from 'helper/animation';

class ArrowLink extends React.Component {
	arrow = React.createRef();

	enter = () => {
		TweenLite.to(this.arrow.current, duration / 2, {
			x: -15,
			ease: Circ
		});
	};

	leave = () => {
		TweenLite.to(this.arrow.current, duration / 2, {
			x: 0,
			ease: Circ
		});
	};

	render() {
		return (
			<Link href={this.props.href}>
				<a
					className={`arrow-link ${this.props.className}`}
					onMouseEnter={this.enter}
					onMouseLeave={this.leave}
					target={this.props.newTab ? '_blank' : '_self'}>
					<span className='arrow-link__arrow' ref={this.arrow}>
						<svg data-type='arrow' width='6px' height='10px' viewBox='0 0 6 10'>
							<path
								fillRule='evenodd'
								opacity='0.5'
								fill='rgb(255, 255, 255)'
								d='M5.284,5.000 L1.000,9.285 L0.293,8.578 L3.870,5.000 L0.293,1.423 L1.000,0.716 L4.577,4.293 L4.577,4.293 L5.284,5.000 Z'
							/>
						</svg>
					</span>
					<HoverLink
						{...this.props}
						style={{
							...this.props.style,
							display: 'inline-block'
						}}
						onlyContent
						className=''>
						{this.props.children}
					</HoverLink>
				</a>
			</Link>
		);
	}
}

export default ArrowLink;
