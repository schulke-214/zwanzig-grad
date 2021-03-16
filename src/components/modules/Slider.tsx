import React, { FunctionComponent, useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styled, { ThemeContext } from 'styled-components';

import { rem } from 'lib/polished';
import { desktop, landscape, tablet } from 'lib/media';

import ModuleContainer from 'components/generic/ModuleContainer';
import Picture from 'components/generic/Picture';

import { CMSResponsiveImage } from 'data/cms';


const sliderItemDimensionMixin = (width: string, dimension: { width: number; height: number; }): any => `
	height: ${width} !important;
	width: calc((${width} / ${dimension.height}) * ${dimension.width}) !important;
`;

const Slide = styled(Picture)`
	${(props: any) => sliderItemDimensionMixin('60vw', props.file.details.image)}

	${landscape} {
		${(props: any) => sliderItemDimensionMixin('50vw', props.file.details.image)}
	}

	${desktop} {
		${(props: any) => sliderItemDimensionMixin(rem(props.theme.layout.maxWidth / 2), props.file.details.image)}
	}
`;

interface SliderProps {
	images: CMSResponsiveImage[];
	showTitle: boolean;
	title: string;
	className?: string;
}

const Slider: FunctionComponent<SliderProps> = ({ className, images }) => {
	const theme = useContext(ThemeContext);

	const settings = {
		loopedSlides: 2,
		loop: true,
		slidesPerView: 'auto' as any,
		slideToClickedSlide: true,
		spaceBetween: theme.spacings.medium
	};

	return (
		<ModuleContainer className={className}>
			<Swiper {...settings}>
				{images.map(image => (
					<SwiperSlide
						key={image.contentful_id}
						style={{ width: 'initial' }}
					>
						<Slide {...image} isCropped isSlim />
					</SwiperSlide>
				))}
			</Swiper>
		</ModuleContainer>
	);
}


export default styled(Slider)`
	margin: 0 ${props => rem(-props.theme.spacings.medium)} ${props => rem(props.theme.spacings.small)};

	${tablet} {
		margin: 0 0 ${props => rem(props.theme.spacings.xlarge)};
	}

	picture > img {
		margin-bottom: 0;
	}
`;
