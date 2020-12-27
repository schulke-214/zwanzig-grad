import React, { FunctionComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'lib/global-styles';
import { DefaultTheme } from 'lib/themes';

import Navigation from 'components/layout/Navigation';
import { tablet } from 'lib/media';
import { rem } from 'lib/polished';

const Container = styled.div`
	display: grid;
	grid-template-columns: 17.5rem auto;
	grid-template-rows: 6.5rem auto;
	width: 100%;
	margin: 0 auto;
	max-width: ${props => rem(props.theme.layout.maxWidth)};
	min-height: 100vh;

	${tablet} {
		height: 100vh;
	}

	@media screen and (min-width: ${props => rem(props.theme.layout.maxWidth)}) {
		&::after {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			height: 100vh;
			width: calc(50vw - ${props => rem(props.theme.layout.maxWidth / 2)});
			background-color: ${props => props.theme.colors.muted};
		}
	}

	main {
		max-width: 100vw;
		overflow-x: hidden;
		background-color: ${props => props.theme.colors.muted};
		padding: ${props => rem(props.theme.spacings.medium)};
		padding-top: ${props => rem(props.theme.spacings.large)};
		grid-column: 1 / span 2;
		grid-row: 2 / span 1;
	
		${tablet} {
			overflow-y: auto;
			padding: ${props => rem(props.theme.spacings.large)};
			grid-column: 2 / span 1;
			grid-row: 1 / span 2;
		}

		@media screen and (min-width: ${props => rem(props.theme.layout.maxWidth)}) {
			padding-right: calc(${props => rem(props.theme.spacings.medium)} + 50vw - ${props => rem(props.theme.layout.maxWidth / 2)});
			margin-right: calc((50vw - ${props => rem(props.theme.layout.maxWidth / 2)}) * -1);
		}
	}
`;

interface LayoutProps {
	children: any;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
	<ThemeProvider theme={DefaultTheme}>
		<GlobalStyles />
		<Container>
			<Navigation />
			<main>{children}</main>
		</Container>
	</ThemeProvider>
);

export default Layout;
