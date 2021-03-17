import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import Navigation from 'components/layout/Navigation';
import MenuIcon from 'components/layout/MenuIcon';
import Logo from 'components/generic/Logo';

import { useScrollData } from 'hooks/use-scroll-data';

import { rem, transparentize } from 'lib/polished';
import { tablet } from 'lib/media';


const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	top: 0;
	left: 0;
	z-index: ${props => props.theme.layers.default.foreground};
	padding: ${props => rem(props.theme.spacings.medium)};

	${tablet} {
		padding: ${props => rem(props.theme.spacings.medium)} ${props => rem(props.theme.spacings.large)};
	}

	&::after {
		content: '';
		display: block;
		position: absolute;
		z-index:  ${props => props.theme.layers.overlay.content};
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${props => transparentize(0.2, props.theme.colors.background)};
	}

	ul {
		list-style: none;
		display: block;
	}

	${Logo} {
		z-index:  ${props => props.theme.layers.overlay.foreground};
	}
`;

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = ({}) => {
	const { y, deltaY } = useScrollData(100);
	const [open, setOpen] = useState(false);
	const toggleOpen = () => setOpen(o => !o);
	const close = () => setOpen(false);

	const hidden = y > 100 && deltaY > 0 && deltaY !== y;

	return (
		<HeaderContainer
			css={`
				${hidden ? `transform: translateY(-100%);` : ''}
				transition: transform ${(props: any) => props.theme.animation.duration.smooth}s ease-out;
			`}
		>
			<Logo onClick={close} />
			<MenuIcon
				open={open}
				onClick={toggleOpen}
				css={`right: -${(props: any) => rem(props.theme.spacings.small)};`}
			/>
			{open && <Navigation onClose={close} />}
		</HeaderContainer>
	);
};

export default Header;
