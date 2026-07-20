export type Language = 'en' | 'es'

export const DEV_SERVER_PORT = 5190
export const DEV_SERVER_URL = `http://localhost:${DEV_SERVER_PORT}`

export const ARIA_LABELS = {
	home: 'Home',
	language: 'Language',
	toggleTheme: 'Toggle theme',
} as const

export const SECTION_IDS = {
	profile: 'profile-section',
	aboutMe: 'about-me-section',
	techStack: 'tech-stack-section',
	experience: 'experience-section',
	now: 'now-section',
	contactMe: 'contact-me-section',
} as const

export const LANGUAGE_OPTION: Record<Language, string> = {
	en: 'EN',
	es: 'ES',
}

export const ABOUT_ME_HEADING: Record<Language, string> = {
	en: 'Who is Luis Barrantes?',
	es: '¿Quién es Luis Barrantes?',
}

export const DOWNLOAD_RESUME_LABEL: Record<
	Language,
	{ idle: string; generating: string }
> = {
	en: { idle: 'Download Resume', generating: 'Generating…' },
	es: { idle: 'Descargar CV', generating: 'Generando…' },
}

export const CONTACT_FORM_LABEL: Record<
	Language,
	{
		name: string
		email: string
		message: string
		submit: string
		dialogTitle: string
	}
> = {
	en: {
		name: 'Name',
		email: 'Email address',
		message: 'Message',
		submit: 'Send message',
		dialogTitle: 'Message sent 🚀',
	},
	es: {
		name: 'Nombre',
		email: 'Correo electrónico',
		message: 'Mensaje',
		submit: 'Enviar',
		dialogTitle: 'Mensaje enviado 🚀',
	},
}

export const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send'
