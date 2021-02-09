import React, { FunctionComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'lib/global-styles';
import { DefaultTheme } from 'lib/themes';
import { tablet } from 'lib/media';
import { rem } from 'lib/polished';

import Navigation from 'components/layout/Navigation';
import Footer from 'components/layout/Footer';


const Container = styled.div`
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 6.5rem auto;
	width: 100%;
	margin: 0 auto;

	main {
		width: 100%;
		max-width: ${props => rem(props.theme.layout.maxWidth)};
		margin: 0 auto;
		padding: ${props => rem(props.theme.spacings.medium)};
		padding-top: ${props => rem(props.theme.spacings.large)};
		grid-column: 1 / span 1;
		grid-row: 2 / span 1;
	
		${tablet} {
			overflow-y: auto;
			padding: ${props => rem(props.theme.spacings.large)};;
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
			<Footer />
		</Container>
	</ThemeProvider>
);

export default Layout;
