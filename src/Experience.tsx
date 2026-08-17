import { useContext } from 'react'
import { Fade } from 'react-awesome-reveal'

import { experiences } from './data/experience'
import { pickTranslation } from './utils/pickTranslation'

import { LanguageContext } from './contexts/language.context'
import { ResumeSubtitle } from './components/ResumeSubtitle'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { FADE_DURATION_SLOW } from './constants'

const content = {
	en: { sectionTitle: 'Education & Experience' },
	es: { sectionTitle: 'Educación y experiencia' },
}

export const Experience = () => {
	const { language } = useContext(LanguageContext)
	const { sectionTitle } = pickTranslation(content, language)

	return (
		<section
			id="experience-section"
			className="flex min-h-screen items-center justify-center bg-bg py-10 text-font sm:h-screen sm:py-0"
		>
			<Fade direction="up" triggerOnce className="w-full">
				<div className="mx-auto w-[91.6667%] md:w-[83.3333%]">
					<ResumeSubtitle>{sectionTitle}</ResumeSubtitle>
					<div className="mx-auto mt-8 max-w-3xl rounded-card bg-timeline-bg px-6 py-8 sm:px-12 sm:py-12">
						<Fade duration={FADE_DURATION_SLOW} direction="up" triggerOnce>
							<ExperienceTimeline entries={experiences} />
						</Fade>
					</div>
				</div>
			</Fade>
		</section>
	)
}
