import React, { FunctionComponent, useContext, useRef } from 'react';
import styled, { css, keyframes, ThemeContext } from 'styled-components';
import LazyLoad from 'react-lazyload';
import ContentLoader from 'react-content-loader';


import { CMSResponsiveImage } from 'data/cms';

import { useBoundingClientRect } from 'hooks/use-bounding-client-rect';


interface PictureProps extends CMSResponsiveImage {
	className?: string;
	isCropped?: boolean;
	isSlim?: boolean;
}

const PicturePlaceholder: FunctionComponent<PictureProps> = ({ className, file, isCropped }) => {
	const ref = useRef(null);
	const rect = useBoundingClientRect(ref);
	const theme = useContext(ThemeContext);
	const { width, height } = file.details.image;

	const placeholderWidth = isCropped ? rect?.width || width : width;
	const placeholderHeight = isCropped ? rect?.height || height : height;

	return (
		<picture
			ref={ref}
			className={className}
		>
			<ContentLoader
				title="Lädt..."
				speed={theme.animation.placeholder.speed}
				width={placeholderWidth}
				height={placeholderHeight}
				viewBox={`0 0 ${placeholderWidth} ${placeholderHeight}`}
				backgroundColor={theme.animation.placeholder.background}
				foregroundColor={theme.animation.placeholder.foreground}
			>
				<rect x="0" y="0" rx="0" ry="0" width={placeholderWidth} height={placeholderHeight} />
			</ContentLoader>
		</picture>
	);
};

const Picture: FunctionComponent<PictureProps> = (props) => {
	const { className, fluid, description, contentful_id } = props;
	const img = useRef<HTMLImageElement>(null);

	return (
		<LazyLoad
			key={contentful_id}
			placeholder={<PicturePlaceholder {...props} />}
			once
			{...{ className } as any}
		>
			<picture>
				<img
					ref={img}
					src={fluid.src}
					srcSet={fluid.srcSet}
					alt={description}
					title={description}
					onLoad={() => {
						if (!img.current) {
							console.error(`Couldn't initialize image ${JSON.stringify(props, null, 4)}`);
							return;
						}

						img?.current?.setAttribute('data-loaded', '');
					}}
				/>
			</picture>
		</LazyLoad>
	);
}

export default styled(Picture)`
	display: block;
	position: relative;
	width: 100%;
	height: 0;
	padding-top: ${props => 100 / props.fluid.aspectRatio}%;

	${props => props.isCropped && css`
		overflow: hidden;
		height: 100%;
		padding-top: 0;
	`}

	${props => props.isSlim && css`
		margin: 0 !important;
	`}


	> picture {
		display: block;
		position: absolute;
		background-color: ${props => props.theme.animation.placeholder.background};
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		> img,
		> svg {
			margin: 0;
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		> img {
			text-indent: -9999%;
			opacity: 0;

			&[data-loaded] {
				animation:
					${props => props.theme.animation.duration.smooth}s
					${keyframes`
						from { opacity: 0; }
						to { opacity: 1;}
					`}
					ease-in-out
					forwards;
			}
		}
	}
`;