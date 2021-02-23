import React, { FunctionComponent, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import anime from 'animejs';
import { useTransitionState } from 'gatsby-plugin-transition-link/hooks/useTransitionState';


export const ANIMATION_LENGTH = 400;
export const ANIMATION_OFFSET = 100;

const TransitionLayer = styled.div`
	position: fixed;
	z-index: ${props => props.theme.layers.overlay.foreground * 2};
	top: 0;
	left: 0;
	width: 100vw;
	height: 105vh;
	background-color: ${props => props.theme.colors.muted};
	transform: translateY(-100%);
`;

const PageTransition: FunctionComponent<{}> = () => {
	const layer = useRef(null);
	const {transitionStatus: state} = useTransitionState();

	useLayoutEffect(() => {
		switch (state) {
			case 'exiting':
				anime({
					targets: layer.current,
					duration: ANIMATION_LENGTH,
					translateY: ['-100%', 0],
					easing: 'easeInOutCirc'
				});
				break;
			case 'entering':
				anime({
					targets: layer.current,
					duration: ANIMATION_LENGTH,
					delay: ANIMATION_LENGTH + ANIMATION_OFFSET,
					translateY: [0, '100%'],
					easing: 'easeInOutCirc'
				});
				break;
		}
	}, [state]);

	return (
		<TransitionLayer ref={layer} />
	);
};

export default PageTransition;
