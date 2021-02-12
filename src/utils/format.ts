export const phoneNumber = (nr: string = ''): string =>
	`${nr.substring(0, 3)} ${nr.substring(3).match(/.{1,2}/g)?.join(' ') || ''}`
