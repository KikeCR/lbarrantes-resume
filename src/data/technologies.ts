export interface Technology {
	title: string
	level: number
	category: 'main' | ''
}

export const technologies: Technology[] = [
	{ title: 'Front-end', level: 90, category: 'main' },
	{ title: 'Back-end', level: 90, category: 'main' },
	{ title: 'AI Agents / LLM Tooling', level: 90, category: 'main' },
	{ title: 'React', level: 90, category: '' },
	{ title: 'Django/Python', level: 90, category: '' },
	{ title: 'SQL', level: 80, category: '' },
	{ title: 'GraphQL', level: 90, category: '' },
	{ title: 'PostgresDB', level: 80, category: '' },
]
