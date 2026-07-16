import { useContext, useState } from 'react'
import { CircularProgress } from '@mui/material'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'

import { LanguageContext } from '../contexts/language.context'
import { downloadResume } from '../pdf/downloadResume'
import { ContactButton } from './ContactButton'

const labels = {
	en: { idle: 'Download Resume', generating: 'Generating…' },
	es: { idle: 'Descargar CV', generating: 'Generando…' },
}

export const DownloadResumeButton = () => {
	const { language } = useContext(LanguageContext)
	const [isGenerating, setIsGenerating] = useState(false)
	const { idle, generating } = labels[language]

	const handleClick = async () => {
		setIsGenerating(true)
		try {
			await downloadResume(language)
		} finally {
			setIsGenerating(false)
		}
	}

	return (
		<ContactButton
			variant="contained"
			disabled={isGenerating}
			onClick={handleClick}
			startIcon={
				isGenerating ? (
					<CircularProgress size={16} color="inherit" />
				) : (
					<PictureAsPdfIcon />
				)
			}
		>
			{isGenerating ? generating : idle}
		</ContactButton>
	)
}
