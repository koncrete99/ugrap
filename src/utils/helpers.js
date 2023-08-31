export const convertStringToUrl = (string) =>
	string
		.replace(/[^a-zA-Z0-9 -]/g, '')
		.replace(/\s+/g, '-')
		.toLowerCase();
