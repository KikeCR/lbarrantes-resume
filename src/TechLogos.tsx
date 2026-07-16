import { useContext } from 'react'
import { Fade } from 'react-awesome-reveal'

import { skillLogos } from './data/skillLogos'
import { pickTranslation } from './utils/pickTranslation'

import { LanguageContext } from './contexts/language.context'
import { ResumeSubtitle } from './components/ResumeSubtitle'

const content = {
	en: { sectionTitle: 'Tech Stack' },
	es: { sectionTitle: 'Stack Tecnológico' },
}

export const TechLogos = () => {
	const { language } = useContext(LanguageContext)
	const { sectionTitle } = pickTranslation(content, language)

	return (
		<section
			id="tech-stack-section"
			className="flex min-h-screen items-center justify-center bg-bg py-10 text-font sm:h-screen sm:py-0"
		>
			<Fade direction="up" triggerOnce className="w-full">
				<div className="mx-auto w-[91.6667%] md:w-[83.3333%]">
					<ResumeSubtitle>{sectionTitle}</ResumeSubtitle>
					<div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-5">
						{skillLogos.map(({ title, Icon }) => (
							<div
								key={title}
								className="flex flex-col items-center gap-3 rounded-2xl border border-font/10 py-8 text-center transition-colors hover:border-link/40 hover:text-link"
							>
								<Icon size={40} />
								<span className="text-sm font-medium">{title}</span>
							</div>
						))}
					</div>
				</div>
			</Fade>
		</section>
	)
}
