import { Theme } from 'styled-components';

import { colors } from 'lib/colors';


const BLACK: string = colors.black;
const WHITE: string = colors.white;
const BRAND: string = colors.green;
const GRAY: string = colors.gray;


export const DefaultTheme: Theme = {
	layout: {
		maxWidth: 1240
	},
	logo: {
		width: 64,
		height: 64
	},
	colors: {
		foreground: BLACK,
		background: WHITE,
		brand: BRAND,
		muted: GRAY
	},
	decorations: {
		line: {
			width: 40,
			height: 2,
			color: BRAND
		}
	},
	spacings: {
		xlarge: 60,
		large: 40,
		medium: 20,
		small: 10,
		xsmall: 5
	},
	border: {
		radius: {
			rounded: 3
		}
	},
	animation: {
		duration: {
			instant: 0.1,
			fast: 0.25,
			smooth: 0.5
		}
	},
	layers: {
		overlay: {
			foreground: 105,
			content: 100,
			background: 95
		},
		popup: {
			foreground: 55,
			content: 50,
			background: 45
		},
		default: {
			foreground: 5,
			content: 0,
			background: -5
		}
	},
	boxShadow: {
		default: 'rgba(0, 0, 0, 0.15) 0px 5px 40px'
	}
};
