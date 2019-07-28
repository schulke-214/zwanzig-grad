// import { Masonry } from 'helper/masonry';

import ProjectTeaser from 'components/ui/project-teaser/ProjectTeaser';

import LazyLoad from 'react-lazyload';
import { Grid } from 'components/ui/grid/Grid';

import './ProjectMasonry.scss';

class ProjectMasonry extends React.Component {
	container = React.createRef();

	componentDidMount() {
		this.masonry = new Masonry(this.container.current, {
			itemSelector: '.project-masonry__item',
			stagger: 30,
			columnWidth: this.container.current.style.width / 2
		});

		// layout Masonry after each image loads
		// window.imagesLoaded(this.container.current).on('progress', () => {
		//
		// });

		// this.masonry = new Masonry(this.container.current, {
		// 	itemSelector: '.project-masonry__item'
		// });
	}

	componentWillUnmount() {
		// this.masonry.unmount();
	}

	imageLoaded = () => {
		console.log('AN IMAGE WAS LOADED');
		this.masonry.layout();
	};

	render() {
		const lazy = (src, height) => (
			<ProjectTeaser height={height} once>
				<img src={src} onLoad={this.imageLoaded} />
			</ProjectTeaser>
		);

		return (
			<Grid>
				<ul className='project-masonry' ref={this.container}>
					<li className='project-masonry__item project-masonry__item--offset' />
					<li className='project-masonry__item'>
						{lazy('https://source.unsplash.com/300x400', 400)}
					</li>
					<li className='project-masonry__item'>
						{lazy('https://source.unsplash.com/300x200', 200)}
					</li>
					<li className='project-masonry__item'>
						{lazy('https://source.unsplash.com/300x325', 325)}
					</li>
					<li className='project-masonry__item'>
						{lazy('https://source.unsplash.com/300x250', 250)}
					</li>
					<li className='project-masonry__item'>
						{lazy('https://source.unsplash.com/300x450', 450)}
					</li>
					<li className='project-masonry__item'>
						{lazy('https://source.unsplash.com/300x375', 375)}
					</li>
					<li className='project-masonry__item'>
						{lazy('https://source.unsplash.com/300x150', 150)}
					</li>
				</ul>
			</Grid>
		);
	}
}

export default ProjectMasonry;
