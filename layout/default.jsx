import Navigation from 'components/sections/navigation/Navigation';
import ProjectMasonry from 'components/sections/project-masonry/ProjectMasonry';
import Footer from 'components/sections/footer/Footer';

export class Layout extends React.Component {
	render() {
		return (
			<>
				<Navigation />
				<main className='layout__main'>{this.props.children}</main>
				<ProjectMasonry />
				<Footer />
			</>
		);
	}
}
