import { useContext } from 'react'
import { Avatar } from '@mui/material'
import ReactTypingEffect from 'react-typing-effect'
import { Fade } from 'react-awesome-reveal'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

import avatar from './images/lbarrantes_avatar.jpg'

import { LanguageContext } from './contexts/language.context'
import { ContactButton } from './components/ContactButton'

const SOCIAL_LINKS = {
	linkedIn: 'https://www.linkedin.com/in/luis-enrique-barrantes-8141995b/',
	github: 'https://github.com/KikeCR',
} as const

const AVATAR_SIZE = 120

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
		contactMeCta: 'Contact me',
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
		<section className="flex min-h-screen items-center justify-center bg-bg py-10 text-font sm:h-screen sm:py-0">
			<Fade direction="up" triggerOnce className="w-full">
				<div className="flex flex-wrap justify-center">
					<div className="w-[91.6667%] sm:w-[41.6667%]">
						<Avatar
							alt="Luis Barrantes"
							src={avatar}
							className="mx-auto sm:float-right sm:mr-4"
							sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
						/>
					</div>
					<div className="mt-5 w-[91.6667%] text-center sm:mt-0 sm:w-[58.3333%] sm:text-left">
						<h1 className="mb-3 text-4xl font-bold">Luis Barrantes</h1>
						<ReactTypingEffect
							text={description}
							speed={100}
							eraseSpeed={100}
							typingDelay={200}
							eraseDelay={1000}
						/>
						<div className="mt-3 flex justify-center pl-1 sm:justify-start">
							<a
								href={SOCIAL_LINKS.github}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
								className="px-2.5 sm:pr-5 sm:pl-0"
							>
								<GitHubIcon
									className="text-social-icons hover:text-social-icons-hover"
									sx={{ fontSize: 26 }}
								/>
							</a>
							<a
								href={SOCIAL_LINKS.linkedIn}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="px-2.5 sm:pr-5"
							>
								<LinkedInIcon
									className="text-social-icons hover:text-social-icons-hover"
									sx={{ fontSize: 26 }}
								/>
							</a>
						</div>
						<ContactButton
							variant="contained"
							sx={{ mt: 1.5 }}
							onClick={() => {
								document.getElementById('contact-me-section')?.scrollIntoView()
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
