import React, { FunctionComponent, useContext, useState } from 'react'
import SlickSlider from 'react-slick';
import styled, { ThemeContext } from 'styled-components';
import { rem } from 'lib/polished';


const SliderItem = styled.div`
	background-color: ${props => props.theme.colors.brand};
	/* padding-top: 50%; */

	&, img {
		display: block !important;
		width: 100%;
		height: 100%;
	}

	img {
		margin: 0;
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
	const [grabbing, setGrabbing] = useState(false);
	const theme = useContext(ThemeContext);

	const settings = {
		arrows: false,
		centerMode: true,
		centerPadding: `${theme.spacings.xlarge * 2}px`,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		focusOnSelect: true,
		afterChange: () => setGrabbing(false)
	};

	return (
		<SlickSlider {...settings} className={className + (grabbing ? ' is-grabbing' : '')}>
			{images.map((image: any) => (
				<SliderItem
					key={image.id}
					onMouseDown={() => setGrabbing(true)}
					onMouseUp={() => setGrabbing(false)}
					onMouseOut={() => setGrabbing(false)}
				>
					<img src={image.desktop.src} alt={"abc"} />
				</SliderItem>
			))}
		</SlickSlider>
	);
}


export default styled(Slider)`
	position: relative;
	margin: 0 ${props => rem(-props.theme.spacings.large)} ${props => rem(props.theme.spacings.medium)};
	width: calc(100% + ${props => rem(2 * props.theme.spacings.large)});

	.slick-slide {
		display: block;
		cursor: pointer;
		height: 100%;
	}

	.slick-slide > div {
		margin: 0 ${props => rem(props.theme.spacings.small)};
	}

	.slick-current {
		cursor: grab;
	}

	&.is-grabbing .slick-slide {
		cursor: grabbing;
	}
`;
