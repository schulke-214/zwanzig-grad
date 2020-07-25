import { createGlobalStyle, GlobalStyleComponent, DefaultTheme } from 'styled-components';

import typography from 'lib/typography';
import { normalize } from 'lib/polished';


export const GlobalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
	${normalize()}
	${typography.toString()}

	* {
		color: ${props => props.theme.colors.foreground};
		text-align: left;
		word-wrap: break-word;
		font-kerning: normal;
	}

	html {
		background-color: ${props => props.theme.colors.background};
		min-width: 100vw;
		max-width: 100vw;
		overflow-x: hidden;
		
		&.theme-transition * {
			transition: none !important;
		}
	}

	a {
		color: ${props => props.theme.colors.foreground};
		text-decoration: none;
	}

	p a {
		text-decoration: underline;
	}

	ul {
		margin-left: 0;
		list-style-position: inside;
	}

	pre, hr, code {
		font-family: '!!!<INSERT HERE>!!!', monospace;
	}

	button {
		border: 0;
		outline: none;
		text-decoration: none;
	}
`;
