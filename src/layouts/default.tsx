import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'lib/global-styles';
import { DefaultTheme } from 'lib/themes';


const Layout: FunctionComponent<{}> = ({ children }) => (
	<ThemeProvider theme={DefaultTheme}>
		<GlobalStyles />
		{children}
	</ThemeProvider>
);

export default Layout;
