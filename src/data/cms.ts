export type CMSContentModule = {
	__typename: string;
	id: string;
};

export type CMSResponsiveImage = {
	id: string;
	title: string;
	mobile: {
		src: string;
	};
	desktop: {
		src: string;
	};
};
