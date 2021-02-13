import Typography from 'typography';
import GithubTheme from 'typography-theme-github';


GithubTheme.overrideThemeStyles = () => ({
	'h1, h2, h3, h4, h5, h6': {
		borderBottom: 0
	}
})

const typography = new Typography({
	...GithubTheme,
	bodyColor: undefined,
	headerColor: undefined,
	headerFontFamily: ['Lucida Grande'],
	bodyFontFamily: ['Lucida Grande']
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
	typography.injectStyles();
}

export const rhythm = typography.rhythm;
export const scale = typography.scale;
export default typography;