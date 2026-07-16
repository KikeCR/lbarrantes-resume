import { useContext } from 'react'
import { Avatar } from '@mui/material'
import { Fade } from 'react-awesome-reveal'

import avatar from './images/lbarrantes_avatar.jpg'
import { pickTranslation } from './utils/pickTranslation'

import { LanguageContext } from './contexts/language.context'
import { ResumeSubtitle } from './components/ResumeSubtitle'

const AVATAR_SIZE = 120

const content = {
	en: {
		sectionTitle: 'Who is Luis Barrantes?',
		myDescription:
			"<p>I'm Luis Barrantes, a full-stack developer with a track record thriving in startups and other fast-paced environments, where priorities shift quickly and ownership matters. I'm proactive by nature. I look for problems before they become blockers, take initiative without waiting to be asked, and follow through on what I commit to. I put as much care into communication as I do into code: keeping my team and stakeholders in the loop, asking the right questions early, and making sure technical decisions are understood by everyone involved. Always eager to collaborate, adapt to new technologies, and keep growing both my technical and soft skills.</p><p>Love music and concerts, traveling, photography, outdoors, dogs, working out and hanging out with my loved ones.</p>",
	},
	es: {
		sectionTitle: '¿Quién es Luis Barrantes?',
		myDescription:
			'<p>Soy Luis Barrantes, full-stack developer con experiencia trabajando en startups y otros entornos de ritmo acelerado, donde las prioridades cambian rápido y la responsabilidad personal es clave. Soy proactivo por naturaleza: identifico problemas antes de que se conviertan en obstáculos, tomo la iniciativa sin esperar a que me lo pidan, y cumplo con lo que me comprometo a hacer. Le doy tanta importancia a la comunicación como al código: mantengo a mi equipo y a los stakeholders informados, hago las preguntas correctas a tiempo, y me aseguro de que las decisiones técnicas se entiendan por todos los involucrados. Siempre dispuesto a colaborar, adaptarme a nuevas tecnologías y seguir creciendo tanto en mis habilidades técnicas como blandas.</p><p>Me apasiona la música y los conciertos, viajar, la fotografía, los perros, el aire libre, hacer ejercicio y pasar el tiempo con mis seres queridos.</p>',
	},
}

export const AboutMe = () => {
	const { language } = useContext(LanguageContext)
	const { sectionTitle, myDescription } = pickTranslation(content, language)

	return (
		<section
			id="about-me-section"
			className="flex min-h-screen items-center justify-center bg-bg py-10 text-font sm:h-screen sm:py-0"
		>
			<Fade direction="up" triggerOnce className="w-full">
				<div className="mx-auto w-[91.6667%] md:w-[83.3333%]">
					<ResumeSubtitle>{sectionTitle}</ResumeSubtitle>
					<div className="mt-8 flex flex-wrap items-center justify-center gap-6">
						<div className="w-full sm:flex-1">
							<Fade triggerOnce>
								<div
									className="rounded-[24px] bg-bubble-bg px-[30px] py-6 text-right leading-relaxed text-bubble-font shadow-md [&_p]:my-4"
									dangerouslySetInnerHTML={{ __html: myDescription }}
								/>
							</Fade>
						</div>
						<div className="w-full sm:w-auto">
							<Avatar
								alt="Luis Barrantes"
								src={avatar}
								className="mx-auto sm:float-left sm:ml-4"
								sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
							/>
						</div>
					</div>
				</div>
			</Fade>
		</section>
	)
}
