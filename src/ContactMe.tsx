import { useContext } from 'react'
import { ContactMeForm } from './ContactMeForm'
import { Fade } from 'react-awesome-reveal'

import { LanguageContext } from './contexts/language.context'
import { ResumeSubtitle } from './components/ResumeSubtitle'

const CONTACT_EMAIL = 'luis.barrantesv@gmail.com'

const content = {
	en: {
		sectionTitle: 'Contact Me',
		formTitle: "Let's talk",
		formDescription: (email: string) =>
			`Don't like forms? Send <a href='mailto:${email}?subject=lbarrantes message'>email</a> instead.`,
	},
	es: {
		sectionTitle: 'Contáctame',
		formTitle: 'Hablemos un poco.',
		formDescription: (email: string) =>
			`¿No te gustan los forms? <br />No hay problema, envíame un <a href='mailto:${email}?subject=Mensaje desde lbarrantes'>email</a>.`,
	},
}

export const ContactMe = () => {
	const { language } = useContext(LanguageContext)
	const { sectionTitle, formTitle, formDescription } = content[language]

	return (
		<section
			id="contact-me-section"
			className="flex min-h-screen items-center justify-center bg-bg py-10 text-font md:py-0"
		>
			<div className="w-[91.6667%] md:w-[83.3333%]">
				<Fade direction="up" triggerOnce>
					<ResumeSubtitle>{sectionTitle}</ResumeSubtitle>
				</Fade>
				<div className="mt-8 flex w-full flex-wrap gap-6">
					<div className="w-full md:w-[calc(25%-1rem)]">
						<Fade direction="up" triggerOnce cascade>
							<h3 className="my-[18.72px] text-[18.72px] font-bold leading-[normal]">
								{formTitle}
							</h3>
							<p
								className="-mt-2 mb-4 leading-normal [&_a]:text-link [&_a]:no-underline"
								dangerouslySetInnerHTML={{
									__html: formDescription(CONTACT_EMAIL),
								}}
							/>
						</Fade>
					</div>
					<div className="w-full sm:w-[calc(75%-1rem)]">
						<Fade direction="up" triggerOnce>
							<ContactMeForm />
						</Fade>
					</div>
				</div>
			</div>
		</section>
	)
}
