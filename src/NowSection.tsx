import { useContext } from 'react'
import { Fade } from 'react-awesome-reveal'

import { pickTranslation } from './utils/pickTranslation'

import { LanguageContext } from './contexts/language.context'
import { ResumeSubtitle } from './components/ResumeSubtitle'

const content = {
	en: {
		sectionTitle: "What I'm focused on now",
		body: 'Exploring how AI agents and LLM tooling reshape day-to-day engineering — building with them, not just talking about them.',
	},
	es: {
		sectionTitle: 'En qué estoy enfocado ahora',
		body: 'Explorando cómo los agentes de IA y las herramientas basadas en LLMs están cambiando el trabajo diario de ingeniería — construyendo con ellas, no solo hablando de ellas.',
	},
}

export const NowSection = () => {
	const { language } = useContext(LanguageContext)
	const { sectionTitle, body } = pickTranslation(content, language)

	return (
		<section className="flex min-h-screen items-center justify-center bg-bg py-10 text-font sm:h-screen sm:py-0">
			<Fade direction="up" triggerOnce className="w-full">
				<div className="mx-auto w-[91.6667%] max-w-2xl text-center md:w-[83.3333%]">
					<div className="inline-block text-left">
						<ResumeSubtitle>{sectionTitle}</ResumeSubtitle>
					</div>
					<p className="mt-8 text-lg leading-relaxed">{body}</p>
				</div>
			</Fade>
		</section>
	)
}
