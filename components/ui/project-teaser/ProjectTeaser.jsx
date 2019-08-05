import LazyLoad from 'react-lazyload';
import { duration, ease } from 'helper/animation';

import './ProjectTeaser.scss';

class ProjectTeaser extends React.Component {
	container = React.createRef();

	componentDidMount() {
		this.tl = new TimelineMax({ paused: true }).from(this.container.current, duration, {
			opacity: 0,
			y: 200,
			ease
		});

		this.observer = new IntersectionObserver(this.handleIntersection, {
			root: this.container.current,
			threshold: 0.25
		}).observe(this.container.current);
	}

	handleIntersection = (entry, observer) => {
		entry = entry[0];

		if (entry.isIntersecting) {
			this.tl.play();
			console.log('show');
		}
	};

	render() {
		return (
				<div ref={this.container}>
					<LazyLoad {...this.props}>
						{this.props.children}
					</LazyLoad>
					<span>Projekt Xyz</span>
				</div>
		);
	}
}

export default ProjectTeaser;
