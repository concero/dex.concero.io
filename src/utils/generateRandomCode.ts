export function generateRandomCode(): string {
	const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
	let randomCode = ''

	for (let i = 0; i < 16; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length)
		randomCode += characters.charAt(randomIndex)
	}

	return randomCode
}
