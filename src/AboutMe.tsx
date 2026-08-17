import { useContext } from 'react'
import { Avatar } from '@mui/material'
import { Fade } from 'react-awesome-reveal'

import avatar from './images/lbarrantes_avatar.jpg'
import { pickTranslation } from './utils/pickTranslation'

import { LanguageContext } from './contexts/language.context'
import { ResumeSubtitle } from './components/ResumeSubtitle'

const AVATAR_SIZE = 140

const content = {
	en: {
		sectionTitle: 'Who is Luis Barrantes?',
		myDescription:
			"<p>I'm Luis Barrantes, a full-stack developer who thrives in fast-paced startup environments where ownership matters. I'm proactive by nature. I catch problems early, take initiative, and follow through on what I commit to. I care as much about clear communication as I do about clean code, and I'm always learning new technologies and skills.</p><p>Outside of work: music and concerts, traveling, photography, the outdoors, dogs, working out, and spending time with the people I love.</p>",
	},
	es: {
		sectionTitle: '¿Quién es Luis Barrantes?',
		myDescription:
			'<p>Soy Luis Barrantes, full-stack developer que se desenvuelve bien en startups y entornos de ritmo acelerado, donde la responsabilidad personal es clave. Soy proactivo por naturaleza: identifico problemas a tiempo, tomo la iniciativa y cumplo con lo que me comprometo a hacer. Le doy tanta importancia a la comunicación como al código, y siempre estoy aprendiendo nuevas tecnologías y habilidades.</p><p>Fuera del trabajo: música y conciertos, viajar, fotografía, el aire libre, perros, hacer ejercicio y pasar tiempo con mis seres queridos.</p>',
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
					<div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_1.4fr] sm:gap-12">
						<div className="flex justify-center sm:justify-end">
							<Avatar
								alt="Luis Barrantes"
								src={avatar}
								sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
							/>
						</div>
						<Fade triggerOnce>
							<div
								className="rounded-card bg-bubble-bg px-[30px] py-6 leading-relaxed text-bubble-font shadow-md [&_p]:my-4"
								dangerouslySetInnerHTML={{ __html: myDescription }}
							/>
						</Fade>
					</div>
				</div>
			</Fade>
		</section>
	)
}
