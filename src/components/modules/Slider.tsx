import React, { FunctionComponent, useContext } from 'react'
import Swiper from 'react-id-swiper';
import styled, { css, ThemeContext } from 'styled-components';

import { rem } from 'lib/polished';
import { desktop, landscape, tablet } from 'lib/media';

import ModuleContainer from 'components/generic/ModuleContainer';
import Picture from 'components/generic/Picture';

import { CMSResponsiveImage } from 'data/cms';


interface SliderItemProps {
	className?: string;
	dimension: {
		width: number;
		height: number;
	}
}

const sliderItemDimensionMixin = (width: string): any => css`
	height: ${width} !important;
	max-width: calc((${width} / ${(props: any) => props.dimension.height}) * ${(props: any) => props.dimension.width}) !important;
`;

const SliderItem = styled.div<SliderItemProps>`
	display: block;
	${sliderItemDimensionMixin('80vw')}

	${landscape} {
		${sliderItemDimensionMixin('50vw')}
	}

	${desktop} {
		${props => sliderItemDimensionMixin(rem(props.theme.layout.maxWidth / 2))}
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
		slidesPerView: 'auto' as any,
		shouldSwiperUpdate: true,
		slideToClickedSlide: true,
		loop: true,
		spaceBetween: theme.spacings.medium,
		keyboard: {
			enabled: true
		}
	};


	return (
		<ModuleContainer>
			<div className={className}>
				<Swiper {...settings}>
					{images.map(image => (
						<SliderItem
							key={image.contentful_id}
							dimension={image.file.details.image}
						>
							<Picture {...image} isCropped isSlim />
						</SliderItem>
					))}
				</Swiper>
			</div>
		</ModuleContainer>
	);
}


export default styled(Slider)`
	margin: 0 ${props => rem(-props.theme.spacings.medium)} ${props => rem(props.theme.spacings.small)};

	${tablet} {
		margin: 0 0 ${props => rem(props.theme.spacings.medium)};
	}

	picture > img {
		margin-bottom: 0;
	}
`;
