import React, { FunctionComponent, useContext } from 'react'
import Swiper from 'react-id-swiper';
import styled, { ThemeContext } from 'styled-components';

import { rem } from 'lib/polished';
import { desktop, tablet } from 'lib/media';


const SliderItem = styled.picture`
	&, img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

interface SliderProps {
	images: any;
	showTitle: boolean;
	title: string;
	className?: string;
}

const Slider: FunctionComponent<SliderProps> = ({ className, images }) => {
	const theme = useContext(ThemeContext);

	const settings = {
		slidesPerView: 1.33,
		centeredSlides: true,
		shouldSwiperUpdate: true,
		slideToClickedSlide: true,
		loop: true,
		spaceBetween: theme.spacings.medium,
		keyboard: {
			enabled: true
		}
	};

	return (
		<div className={className}>
			<Swiper {...settings}>
				{images.map((image: any) => (
					<SliderItem key={image.id}>
						<source srcSet={image.desktop.src} media={desktop.replace('@media ', '')} />
						<img src={image.mobile.src} alt={"abc"} />
					</SliderItem>
				))}
			</Swiper>
		</div>
	);
}


export default styled(Slider)`
	margin: 0 ${props => rem(-props.theme.spacings.medium)} ${props => rem(props.theme.spacings.small)};

	${tablet} {
		margin: 0 ${props => rem(-props.theme.spacings.large)} ${props => rem(props.theme.spacings.medium)};
	}
`;
