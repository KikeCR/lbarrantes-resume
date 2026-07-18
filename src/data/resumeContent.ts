export interface ResumeRoleContent {
	experienceId: string
	bullets: string[]
}

export interface ResumeSkillGroup {
	heading: string
	items: string[]
}

export interface ResumeLocaleContent {
	headline: string
	summary: string
	roles: ResumeRoleContent[]
	skillGroups: ResumeSkillGroup[]
	experienceLabel: string
	educationLabel: string
	skillsLabel: string
}

export const resumeContent: Record<'en' | 'es', ResumeLocaleContent> = {
	en: {
		headline: 'Full-Stack Engineer | Proficient in AI & LLM Tooling',
		summary:
			'Full-stack developer with a track record thriving in startups and other fast-paced environments. Proactive and communication-focused, comfortable owning problems end to end across front-end, back-end, and now AI-assisted tooling.',
		experienceLabel: 'Experience',
		educationLabel: 'Education',
		skillsLabel: 'Skills',
		roles: [
			{
				experienceId: 'thoropass',
				bullets: [
					'Delivered full-stack features end to end, from scoping through production, using React, TypeScript, and Python/Django.',
					'Explored and integrated AI agents and LLM tooling into day-to-day engineering workflows.',
					'Collaborated closely with cross-functional stakeholders, keeping technical decisions understood across the team.',
				],
			},
			{
				experienceId: 'sweetrush',
				bullets: [
					'Led technical direction as Tech Lead / Software Engineer, guiding implementation decisions across projects.',
					'Developed front-end and back-end features, mentoring teammates and reviewing code for quality and consistency.',
					'Partnered with stakeholders to translate requirements into shipped, maintainable software.',
				],
			},
			{
				experienceId: 'hangar',
				bullets: [
					'Built front-end interfaces and components as part of the Critical Mass Latam team.',
					'Worked within an agency environment delivering client-facing web projects on tight timelines.',
				],
			},
			{
				experienceId: 'hp',
				bullets: [
					'Created automated reporting tools that reduced report generation time by up to 90%.',
					'Built SQL-based data pipelines to support business reporting needs.',
				],
			},
		],
		skillGroups: [
			{
				heading: 'Front-end',
				items: [
					'React',
					'TypeScript',
					'HTML',
					'CSS',
					'Vanilla JS',
					'Vite',
				],
			},
			{
				heading: 'Design Systems',
				items: ['Material UI', 'Ant Design', 'Bootstrap', 'styled-components'],
			},
			{
				heading: 'Back-end',
				items: ['Python', 'Django', 'GraphQL', 'PostgreSQL'],
			},
			{
				heading: 'Tools & Other',
				items: [
					'Git',
					'SQL',
					'pytest',
					'React Testing Library',
					'AI Agents / LLM Tooling',
				],
			},
		],
	},
	es: {
		headline: 'Ingeniero Full-Stack | Dominio de Herramientas de IA y LLM',
		summary:
			'Desarrollador full-stack con experiencia trabajando en startups y otros entornos de ritmo acelerado. Proactivo y enfocado en la comunicación, cómodo haciéndose cargo de problemas de principio a fin en front-end, back-end y, más recientemente, herramientas de IA.',
		experienceLabel: 'Experiencia',
		educationLabel: 'Educación',
		skillsLabel: 'Habilidades',
		roles: [
			{
				experienceId: 'thoropass',
				bullets: [
					'Entrega de funcionalidades full-stack de principio a fin, desde el diseño hasta producción, usando React, TypeScript y Python/Django.',
					'Exploración e integración de agentes de IA y herramientas LLM en el flujo de trabajo diario de ingeniería.',
					'Colaboración cercana con stakeholders multifuncionales, asegurando que las decisiones técnicas se entendieran en todo el equipo.',
				],
			},
			{
				experienceId: 'sweetrush',
				bullets: [
					'Liderazgo técnico como Tech Lead / Software Engineer, guiando decisiones de implementación en distintos proyectos.',
					'Desarrollo de funcionalidades de front-end y back-end, mentoría a compañeros y revisión de código para asegurar calidad y consistencia.',
					'Trabajo conjunto con stakeholders para traducir requerimientos en software mantenible y en producción.',
				],
			},
			{
				experienceId: 'hangar',
				bullets: [
					'Construcción de interfaces y componentes de front-end como parte del equipo de Critical Mass Latam.',
					'Trabajo en un entorno de agencia entregando proyectos web para clientes en tiempos ajustados.',
				],
			},
			{
				experienceId: 'hp',
				bullets: [
					'Creación de herramientas de reportería automatizadas que redujeron el tiempo de generación de reportes hasta en un 90%.',
					'Construcción de pipelines de datos basados en SQL para necesidades de reportería del negocio.',
				],
			},
		],
		skillGroups: [
			{
				heading: 'Front-end',
				items: [
					'React',
					'TypeScript',
					'HTML',
					'CSS',
					'JavaScript Vainilla',
					'Vite',
				],
			},
			{
				heading: 'Sistemas de Diseño',
				items: ['Material UI', 'Ant Design', 'Bootstrap', 'styled-components'],
			},
			{
				heading: 'Back-end',
				items: ['Python', 'Django', 'GraphQL', 'PostgreSQL'],
			},
			{
				heading: 'Herramientas y Otros',
				items: [
					'Git',
					'SQL',
					'pytest',
					'React Testing Library',
					'Agentes de IA / Herramientas LLM',
				],
			},
		],
	},
}
