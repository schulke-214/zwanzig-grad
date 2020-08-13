import React, { FunctionComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'lib/global-styles';
import { DefaultTheme } from 'lib/themes';

import Navigation from 'components/core/Navigation';
import { tablet } from 'lib/media';
import { rem } from 'lib/polished';

const Container = styled.div`
	display: grid;
	grid-template-columns: 20rem auto;
	grid-template-rows: 5rem auto;
	width: 100%;
	margin: 0 auto;
	max-width: ${props => rem(props.theme.layout.maxWidth)};

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

	${Navigation} {
		grid-column: 1 / span 2;
		grid-row: 1 / span 1;

		${tablet} {
			overflow-y: auto;
			grid-column: 1 / span 1;
			grid-row: 1 / span 2;
		}
	}

	main {
		background-color: ${props => props.theme.colors.muted};
		padding: ${props => rem(props.theme.spacings.medium)};
		grid-column: 1 / span 2;
		grid-row: 2 / span 1;
	
		${tablet} {
			overflow-y: auto;
			padding: ${props => rem(props.theme.spacings.large)};
			grid-column: 2 / span 1;
			grid-row: 1 / span 2;
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
