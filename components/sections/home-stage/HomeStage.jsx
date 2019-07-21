import HoverImage from 'components/ui/image/hover-image/HoverImage';

import { Grid, Row, Col } from 'components/ui/grid/Grid';

import './HomeStage.scss';

const HomeStage = () => {
	return (
		<div className='home-stage'>
			<Grid className='home-stage__featured-project'>
				<Row>
					<Col width='5' className='home-stage__project-text'>
						a
					</Col>
					<Col width='7' className='home-stage__project-image'>
						<HoverImage src='https://source.unsplash.com/1000x1000' />
					</Col>
				</Row>
				<div className='home-stage__color-box' />
			</Grid>
		</div>
	);
};

export default HomeStage;
