import Navigation from 'components/sections/navigation/Navigation';
import Footer from 'components/sections/footer/Footer';

export class Layout extends React.Component {
	render() {
		return (
			<>
				<Navigation />
				<main className='layout__main'>{this.props.children}</main>
				<Footer />
			</>
		);
	}
}
