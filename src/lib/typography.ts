import Typography from 'typography';
import GithubTheme from 'typography-theme-github';


GithubTheme.overrideThemeStyles = ({ rhythm }: any) => ({
	'h1, h2, h3, h4, h5, h6': {
		marginTop: 0,
		borderBottom: 0
	},
	'p': {
		marginBottom: rhythm(1)
	},
	'.picture': {
		marginTop: rhythm(3/2),
		marginBottom: rhythm(3/2)
	}
})

const typography = new Typography({
	...GithubTheme,
	baseLineHeight: 1.8,
	bodyColor: undefined,
	headerColor: undefined,
	headerFontFamily: ['Lucida Grande', 'sans-serif'],
	bodyFontFamily: ['Lucida Grande', 'sans-serif']
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
	typography.injectStyles();
}

export const rhythm = typography.rhythm;
export const scale = typography.scale;
export default typography;