import styled from 'styled-components';

import { rem } from 'lib/polished';


interface ChapterHeadlineProps {
	inheritColor?: boolean;
	isSlim?: boolean;
}

export default styled.span<ChapterHeadlineProps>`
	position: relative;
	display: block;
	width: min-content;
	white-space: nowrap;
	min-width: ${props => rem(props.theme.decorations.line.width)};
	padding-bottom: ${props => rem(props.theme.spacings.medium)};
	margin-bottom: ${props => props.isSlim ? 0 : rem(props.theme.spacings.medium)};
	color: ${props => props.inheritColor ? 'currentColor' : props.theme.decorations.line.color};
	text-transform: initial;
	font-size: 1rem;

	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: ${props => rem((props.theme.spacings.medium - props.theme.decorations.line.height) / 2)};
		height: ${props => rem(props.theme.decorations.line.height)};
		width: ${props => rem(props.theme.decorations.line.width)};
		background-color: ${props => props.inheritColor ? 'currentColor' : props.theme.decorations.line.color};
	}
`;
