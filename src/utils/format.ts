export const phoneNumber = (nr: string = ''): string =>
	`${nr.substring(0, 3)} ${nr.substring(3, 6)} ${nr.substring(6).match(/.{1,2}/g)?.join(' ') || ''}`
