import { useState } from 'react'

export function useCopyToClipboard(): { isCopied: boolean; copyToClipboard: (string: string) => Promise<void> } {
	const [isCopied, setIsCopied] = useState(false)

	const copyToClipboard = async (string: string) => {
		try {
			if (navigator.clipboard) {
				await navigator.clipboard.writeText(string)
				setIsCopied(true)
			} else {
				const textarea = document.createElement('textarea')
				textarea.value = string
				document.body.appendChild(textarea)
				textarea.select()
				document.execCommand('copy')
				document.body.removeChild(textarea)
				setIsCopied(true)
			}

			setTimeout(() => {
				setIsCopied(false)
			}, 5000)
		} catch (error) {
			console.error('Error copying to clipboard:', error)
		}
	}

	return { isCopied, copyToClipboard }
}
