import HoverLink from 'components/ui/links/hover-link/HoverLink';
import HoverImage from 'components/ui/image/hover-image/HoverImage';

import { Grid, Row, Col } from 'components/ui/grid/Grid';

import './HomeStage.scss';

const HomeStage = () => {
	return (
		<div className='home-stage'>
			<Grid className='home-stage__featured-project'>
				<Row>
					<Col
						width={{
							default: 12,
							tablet: 5
						}}
						className='home-stage__project-text'>
						<span className='color--light-text typo--flags --medium'>
							Featured Project
						</span>

						<h1>Sparkasse Bielefeld</h1>
						<h2 className='color--light-text typo--flags --ultra-light'>
							Lorem ipsum dolor, sit amet.
						</h2>

						<HoverLink
							href=''
							style={{
								'text-transform': 'capitalize'
							}}
							className='typo--size-1 typo--flags --bold color--secondary'>
							More Projects
						</HoverLink>
					</Col>
					<Col
						width={{
							default: 12,
							tablet: 7
						}}
						className='home-stage__project-image'>
						<HoverImage src='https://source.unsplash.com/1000x1000' />
					</Col>
				</Row>
				<div className='home-stage__color-box' />
			</Grid>
		</div>
	);
};

export default HomeStage;
