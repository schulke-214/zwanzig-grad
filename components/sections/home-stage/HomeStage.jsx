import HoverLink from 'components/ui/links/hover-link/HoverLink';
import ArrowLink from 'components/ui/links/arrow-link/ArrowLink';

import HoverImage from 'components/ui/image/hover-image/HoverImage';

import { Grid, Row, Col } from 'components/ui/grid/Grid';

import './HomeStage.scss';

const HomeStage = () => {
	return (
		<div className='home-stage'>
			<Grid>
				<Row className='home-stage__featured-project'>
					<Col
						width={{
							default: 12,
							tablet: 5
						}}
						className='home-stage__project-text'>
						<span className='color--light-text typo--flags --medium'>
							Vorgestelltes Projekt
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
							Mehr Projekte
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
				<Row className='home-stage__quote'>
					<Col width='12'>
						<div className='home-stage__quote-content'>
							<h3>
								Zwanzig Grad ist ein Bielefelder Handwerksbetrieb, Lorem ipsum dolor
								sit amet consectetur adipisicing elite.
							</h3>
							<ArrowLink
								href='/contact'
								style={{ 'text-transform': 'capitalize' }}
								className='typo--flags --bold'>
								Nehmen Sie Kontakt auf
							</ArrowLink>
						</div>
					</Col>
				</Row>
				<div className='home-stage__color-box' />
			</Grid>
		</div>
	);
};

export default HomeStage;
