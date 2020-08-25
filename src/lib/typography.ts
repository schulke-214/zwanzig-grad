import Typography from 'typography';
import GithubTheme from 'typography-theme-github';


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