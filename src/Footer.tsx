import { useContext } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import { pickTranslation } from './utils/pickTranslation'

import { LanguageContext } from './contexts/language.context'
import { CONTACT_LINKS } from './data/contactLinks'
import { DownloadResumeButton } from './components/DownloadResumeButton'

const content = {
	en: { builtWith: 'Built with care.' },
	es: { builtWith: 'Hecho con dedicación.' },
}

export const Footer = () => {
	const { language } = useContext(LanguageContext)
	const { builtWith } = pickTranslation(content, language)
	const year = new Date().getFullYear()

	return (
		<footer className="border-t border-font/10 bg-bg py-6 text-font">
			<div className="mx-auto flex w-[91.6667%] flex-col items-center justify-between gap-6 md:w-[83.3333%] md:flex-row">
				<p className="text-sm text-font/60">
					&copy; {year} Luis Barrantes. {builtWith}
				</p>
				<div className="flex items-center gap-4">
					<DownloadResumeButton variant="icon" />
					<a
						href={CONTACT_LINKS.github}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						<GitHubIcon
							className="text-social-icons hover:text-social-icons-hover"
							sx={{ fontSize: 22 }}
						/>
					</a>
					<a
						href={CONTACT_LINKS.linkedIn}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
					>
						<LinkedInIcon
							className="text-social-icons hover:text-social-icons-hover"
							sx={{ fontSize: 22 }}
						/>
					</a>
				</div>
			</div>
		</footer>
	)
}
