import { createGlobalStyle, GlobalStyleComponent, DefaultTheme } from 'styled-components';

import typography from 'lib/typography';
import { normalize } from 'lib/polished';

// @ts-ignore next-line
import slick from '!!raw-loader!slick-carousel/slick/slick.css'; 
// @ts-ignore next-line
import slickTheme from '!!raw-loader!slick-carousel/slick/slick-theme.css';


export const GlobalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
	@font-face {
		font-family:'Lucida Grande';
		font-style: normal;
		font-weight: 400;
		src:  local('Lucida Grand'), local('Lucida Grande Regular'), url('fonts/lucida-grande.woff2') format('woff2');
	}

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
		width: 100%;
		overflow-x: hidden;
		overflow-y: auto;
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
		font-family: monospace;
	}

	button {
		border: 0;
		outline: none;
		text-decoration: none;
	}

	li > p {
		display: inline-block;
	}

	${slick}
	${slickTheme}
`;
