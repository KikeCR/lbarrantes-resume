import { useContext } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { Fade } from 'react-awesome-reveal'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

import avatar from './images/lbarrantes_avatar.jpg'

import { LanguageContext } from './contexts/language.context'
import { ContactButton } from './components/ContactButton'
import { DownloadResumeButton } from './components/DownloadResumeButton'
import { CONTACT_LINKS } from './data/contactLinks'

const content = {
	en: {
		description: [
			"I'm a front-end engineer.",
			"I'm a back-end engineer.",
			"I'm a full-stack engineer.",
			"I'm a traveler.",
			"I'm a gamer.",
			"I'm human.",
			"I'm not AI.",
		],
		contactMeCta: 'Contact Me',
	},
	es: {
		description: [
			'Soy ingeniero de front-end.',
			'Soy ingeniero de back-end.',
			'Soy ingeniero full-stack.',
			'Soy viajero.',
			'Soy gamer.',
			'Soy humano.',
			'No soy una IA.',
		],
		contactMeCta: 'Contáctame',
	},
}

export const Profile = () => {
	const { language } = useContext(LanguageContext)
	const { description, contactMeCta } = content[language]

	return (
		<section
			id="profile-section"
			className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg py-10 text-font sm:h-screen sm:py-0"
		>
			<span
				aria-hidden="true"
				className="pointer-events-none absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[16rem] leading-none font-bold text-font/[0.035] sm:text-[26rem]"
			>
				LB
			</span>

			<Fade direction="up" triggerOnce className="w-full">
				<div className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
					<img
						src={avatar}
						alt="Luis Barrantes"
						className="h-28 w-28 rounded-full object-cover ring-4 ring-bg sm:h-32 sm:w-32"
					/>
					<h1 className="mt-6 text-4xl font-bold sm:text-6xl">
						Luis Barrantes
					</h1>
					<div className="mt-3 text-lg text-muted sm:text-xl">
						<ReactTypingEffect
							text={description}
							speed={100}
							eraseSpeed={100}
							typingDelay={200}
							eraseDelay={1000}
						/>
					</div>
					<div className="mt-4 flex justify-center">
						<a
							href={CONTACT_LINKS.github}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							className="px-2.5"
						>
							<GitHubIcon
								className="text-social-icons hover:text-social-icons-hover"
								sx={{ fontSize: 26 }}
							/>
						</a>
						<a
							href={CONTACT_LINKS.linkedIn}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="px-2.5"
						>
							<LinkedInIcon
								className="text-social-icons hover:text-social-icons-hover"
								sx={{ fontSize: 26 }}
							/>
						</a>
					</div>
					<div className="mt-6 flex flex-wrap items-center justify-center gap-3">
						<DownloadResumeButton />
						<ContactButton
							variant="outlined"
							sx={{
								backgroundColor: 'transparent',
								color: 'var(--color-button)',
								borderColor: 'var(--color-button)',
								minWidth: { xs: 210, sm: 'auto' },
								'&:hover': {
									backgroundColor: 'var(--color-button)',
									color: 'var(--color-button-text)',
									borderColor: 'var(--color-button)',
								},
							}}
							startIcon={<MailOutlineIcon />}
							onClick={() => {
								document
									.getElementById('contact-me-section')
									?.scrollIntoView()
							}}
						>
							{contactMeCta}
						</ContactButton>
					</div>
				</div>
			</Fade>
		</section>
	)
}
