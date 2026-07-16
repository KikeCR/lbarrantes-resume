import type { Language } from '../contexts/language.context'

export const downloadResume = async (language: Language) => {
	const [{ pdf }, { ResumeDocument }] = await Promise.all([
		import('@react-pdf/renderer'),
		import('./ResumeDocument'),
	])

	const blob = await pdf(<ResumeDocument language={language} />).toBlob()
	const url = URL.createObjectURL(blob)

	const anchor = document.createElement('a')
	anchor.href = url
	anchor.download = `Luis-Barrantes-Resume-${language}.pdf`
	document.body.appendChild(anchor)
	anchor.click()
	anchor.remove()
	URL.revokeObjectURL(url)
}
