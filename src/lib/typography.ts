import Typography from 'typography';
import GithubTheme from 'typography-theme-github';

console.log(GithubTheme)

const typography = new Typography({
	...GithubTheme,
	bodyColor: undefined,
	headerColor: undefined,
	headerFontFamily: ['Arial'],
	bodyFontFamily: ['Arial']
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
	typography.injectStyles();
}


export const rhythm = typography.rhythm;
export const scale = typography.scale;
export default typography;