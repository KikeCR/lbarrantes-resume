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

interface DownloadResumeButtonProps {
	variant?: 'button' | 'icon'
}

export const DownloadResumeButton = ({
	variant = 'button',
}: DownloadResumeButtonProps) => {
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

	if (variant === 'icon') {
		return (
			<button
				type="button"
				aria-label={isGenerating ? generating : idle}
				disabled={isGenerating}
				onClick={handleClick}
				className="cursor-pointer text-social-icons hover:text-social-icons-hover disabled:cursor-default disabled:opacity-50"
			>
				{isGenerating ? (
					<CircularProgress size={22} color="inherit" />
				) : (
					<PictureAsPdfIcon sx={{ fontSize: 22 }} />
				)}
			</button>
		)
	}

	return (
		<ContactButton
			variant="contained"
			disabled={isGenerating}
			onClick={handleClick}
			sx={{ textTransform: 'none', minWidth: { xs: 210, sm: 'auto' } }}
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
