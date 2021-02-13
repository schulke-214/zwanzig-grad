export const shorten = (str: string, len: number): string =>
	str.length > len ? str.substr(0, len - 3) + '...' : str;