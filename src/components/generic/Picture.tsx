import React, { FunctionComponent, useContext, useRef } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import ContentLoader from 'react-content-loader';
// import { graphql, useStaticQuery, Link } from 'gatsby';

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
	// const { className, file, isCropped } = props;

	// console.log(props)

	if (true) {
		return (
			<PicturePlaceholder {...props} />
		);
	}

	return (
		<picture>

		</picture>
	);
}

export default styled(Picture)`
	display: block;
	position: relative;
	width: 100%;
	height: 0;
	padding-top: ${props => 100 / props.fluid.aspectRatio}%;

	${props => props.isSlim && css`
		margin-top: 0;
		margin-bottom: 0;
	`}

	${props => props.isCropped && css`
		overflow: hidden;
		height: 100%;
		padding-top: 0;

	`}

	> svg {
		position: absolute;
		background-color: ${props => props.theme.animation.placeholder.background};
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;