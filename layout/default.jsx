import Header from 'components/header/Header';

export class Layout extends React.Component {
	render() {
		return (
			<>
				<Header />
				<main className='layout__main'>{this.props.children}</main>
			</>
		);
	}
}
