import { Grid } from 'components/ui/grid/Grid';

import './ProjectMasonry.scss';

class ProjectMasonry extends React.Component {
	container = React.createRef();

	componentDidMount() {
		this.container = new Masonry(this.container.current, {
			itemSelector: '.project-masonry__item',
			stagger: 30,
			columnWidth: this.container.current.style.width / 2
		});
	}

	render() {
		return (
			<Grid>
				<ul className='project-masonry' ref={this.container}>
					<li className='project-masonry__item project-masonry__item--offset' />
					<li className='project-masonry__item'>
						<img src='https://source.unsplash.com/300x400' />
					</li>
					<li className='project-masonry__item'>
						<img src='https://source.unsplash.com/300x200' />
					</li>
					<li className='project-masonry__item'>
						<img src='https://source.unsplash.com/300x325' />
					</li>
					<li className='project-masonry__item'>
						<img src='https://source.unsplash.com/300x250' />
					</li>
					<li className='project-masonry__item'>
						<img src='https://source.unsplash.com/300x450' />
					</li>
					<li className='project-masonry__item'>
						<img src='https://source.unsplash.com/300x375' />
					</li>
					<li className='project-masonry__item'>
						<img src='https://source.unsplash.com/300x150' />
					</li>
				</ul>
			</Grid>
		);
	}
}

export default ProjectMasonry;
