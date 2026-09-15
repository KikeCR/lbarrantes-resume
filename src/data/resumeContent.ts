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
	aiLlmLabel: string
	aiLlmBullets: string[]
}

export const resumeContent: Record<'en' | 'es', ResumeLocaleContent> = {
	en: {
		headline: 'Full-Stack Engineer | AI & LLM Application Development',
		summary:
			'Full-stack engineer with a track record thriving in startups and other fast-paced environments. Proactive and communication-focused, comfortable owning problems end to end across front-end, back-end, and AI-assisted tooling, from building production features to designing retrieval-augmented generation pipelines and multi-agent LLM workflows.',
		experienceLabel: 'Experience',
		educationLabel: 'Education',
		skillsLabel: 'Skills',
		aiLlmLabel: 'AI & LLM Engineering',
		aiLlmBullets: [
			'Designed and implemented retrieval-augmented generation (RAG) pipelines, pairing vector databases (Chroma, pgvector) and embedding models with LLM generation to ground responses in domain-specific source data rather than relying on model recall alone.',
			'Built multi-agent orchestration systems (CrewAI) that split complex workflows across specialized agents, keeping deterministic business logic separate from LLM reasoning to improve reliability, testability, and auditability of automated decisions.',
			'Integrated multiple LLM providers (OpenAI, DeepSeek, Kimi) with automatic provider failover and usage-based budget controls, keeping AI features resilient and cost-predictable in production.',
			'Constrained LLM generation to retrieved context to reduce hallucination risk, surfacing source citations alongside AI-generated output for end-user traceability, and exposed these workflows through REST APIs and webhook integrations for external automation triggers.',
			'Developed real-time, WebSocket-based application architecture (Socket.io) with Redis-backed presence tracking and pub/sub scaling across multiple server instances.',
		],
		roles: [
			{
				experienceId: 'thoropass',
				bullets: [
					'Delivered full-stack features end to end, from scoping through production, using React, TypeScript, and Python/Django.',
					'Built a content pipeline pulling certification requirements from Airtable into shared data models applied across new client accounts, then shipped a self-serve Security Review feature extending an existing Risks feature.',
					'Explored and integrated AI agents and LLM tooling into day-to-day engineering workflows, including retrieval-augmented generation (RAG) processes supporting compliance content and audit workflows.',
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
				heading: 'AI & LLM',
				items: [
					'RAG pipelines',
					'Vector databases (Chroma, pgvector)',
					'Embedding models',
					'Multi-agent orchestration (CrewAI)',
					'Prompt engineering',
					'LLM provider integration (OpenAI, DeepSeek, Kimi)',
					'Agent function/tool calling',
				],
			},
			{
				heading: 'Front-end',
				items: [
					'React',
					'Next.js',
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
				items: [
					'Python',
					'Django',
					'FastAPI',
					'Flask',
					'Node.js',
					'Express',
					'GraphQL',
					'PostgreSQL',
					'Prisma',
					'Redis',
					'Socket.IO',
				],
			},
			{
				heading: 'Real-time & Infra',
				items: ['WebSockets', 'Docker', 'GitHub Actions', 'Git'],
			},
			{
				heading: 'Testing & Tools',
				items: ['SQL', 'pytest', 'React Testing Library', 'Playwright'],
			},
		],
	},
	es: {
		headline: 'Ingeniero Full-Stack | Desarrollo de Aplicaciones con IA y LLM',
		summary:
			'Ingeniero full-stack con experiencia trabajando en startups y otros entornos de ritmo acelerado. Proactivo y enfocado en la comunicación, cómodo haciéndose cargo de problemas de principio a fin en front-end, back-end y herramientas asistidas por IA, desde construir funcionalidades en producción hasta diseñar pipelines de generación aumentada por recuperación y flujos de trabajo multi-agente con LLMs.',
		experienceLabel: 'Experiencia',
		educationLabel: 'Educación',
		skillsLabel: 'Habilidades',
		aiLlmLabel: 'Ingeniería de IA y LLM',
		aiLlmBullets: [
			'Diseño e implementación de pipelines de generación aumentada por recuperación (RAG), combinando bases de datos vectoriales (Chroma, pgvector) y modelos de embeddings con generación LLM para fundamentar las respuestas en datos de origen específicos del dominio en lugar de depender solo de la memoria del modelo.',
			'Construcción de sistemas de orquestación multi-agente (CrewAI) que dividen flujos de trabajo complejos entre agentes especializados, manteniendo la lógica de negocio determinística separada del razonamiento del LLM para mejorar la confiabilidad, capacidad de prueba y auditabilidad de las decisiones automatizadas.',
			'Integración de múltiples proveedores de LLM (OpenAI, DeepSeek, Kimi) con failover automático entre proveedores y controles de presupuesto basados en uso, manteniendo las funcionalidades de IA resilientes y con costos predecibles en producción.',
			'Restricción de la generación del LLM al contexto recuperado para reducir el riesgo de alucinaciones, mostrando citas de fuentes junto a los resultados generados por IA para trazabilidad del usuario final, y exposición de estos flujos a través de APIs REST e integraciones por webhook para disparadores de automatización externos.',
			'Desarrollo de arquitectura de aplicaciones en tiempo real basada en WebSockets (Socket.io) con seguimiento de presencia respaldado por Redis y escalamiento pub/sub entre múltiples instancias de servidor.',
		],
		roles: [
			{
				experienceId: 'thoropass',
				bullets: [
					'Entrega de funcionalidades full-stack de principio a fin, desde el diseño hasta producción, usando React, TypeScript y Python/Django.',
					'Construcción de un pipeline de contenido que trae requisitos de certificación desde Airtable hacia modelos de datos compartidos aplicados en nuevas cuentas de clientes, seguido del lanzamiento de una funcionalidad de Security Review de autoservicio que extiende una funcionalidad existente de Risks.',
					'Exploración e integración de agentes de IA y herramientas LLM en el flujo de trabajo diario de ingeniería, incluyendo procesos de generación aumentada por recuperación (RAG) que dan soporte a contenido de cumplimiento y flujos de auditoría.',
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
				heading: 'IA y LLM',
				items: [
					'Pipelines RAG',
					'Bases de datos vectoriales (Chroma, pgvector)',
					'Modelos de embeddings',
					'Orquestación multi-agente (CrewAI)',
					'Ingeniería de prompts',
					'Integración de proveedores LLM (OpenAI, DeepSeek, Kimi)',
					'Function/tool calling de agentes',
				],
			},
			{
				heading: 'Front-end',
				items: [
					'React',
					'Next.js',
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
				items: [
					'Python',
					'Django',
					'FastAPI',
					'Flask',
					'Node.js',
					'Express',
					'GraphQL',
					'PostgreSQL',
					'Prisma',
					'Redis',
					'Socket.IO',
				],
			},
			{
				heading: 'Tiempo Real e Infra',
				items: ['WebSockets', 'Docker', 'GitHub Actions', 'Git'],
			},
			{
				heading: 'Testing y Herramientas',
				items: ['SQL', 'pytest', 'React Testing Library', 'Playwright'],
			},
		],
	},
}
