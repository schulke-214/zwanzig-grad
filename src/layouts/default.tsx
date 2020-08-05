import React, { FunctionComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'lib/global-styles';
import { DefaultTheme } from 'lib/themes';

import Navigation from 'components/core/Navigation';


interface LayoutProps {
	children: any;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
	<ThemeProvider theme={DefaultTheme}>
		<GlobalStyles />
		<Navigation />
		<main>
			{children}
		</main>
	</ThemeProvider>
);

export default Layout;
