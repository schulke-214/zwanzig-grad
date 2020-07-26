import 'styled-components';


declare module 'styled-components' {
	interface LayerConfiguration {
		foreground: number;
		content: number;
		background: number;
	}

	export interface DefaultTheme {
		layout: {
			maxWidth: number;
		};
		colors: {
			foreground: string;
			background: string;
		};
		spacings: {
			xlarge: number;
			large: number;
			medium: number;
			small: number;
			xsmall: number;
		};
		border: {
			radius: {
				rounded: number;
			};
		};
		animation: {
			duration: {
				instant: number;
				fast: number;
				smooth: number;
			};
		};
		layers: {
			overlay: LayerConfiguration;
			popup: LayerConfiguration;
			default: LayerConfiguration;
		};
		boxShadow: {
			default: string;
		};
	}

	export type Theme = DefaultTheme;
}