export type ExperienceCategory = 'edu' | 'work'

export interface ExperienceEntry {
	id: string
	company: string
	role: string
	category: ExperienceCategory
	start: string
	end: string
}

export const experiences: ExperienceEntry[] = [
	{
		id: 'ccc-english',
		company: 'Centro Cultural Costarricense Norteamericano',
		role: 'English Now / Advanced English',
		category: 'edu',
		start: '2007',
		end: '2008',
	},
	{
		id: 'ucr',
		company: 'Universidad de Costa Rica',
		role: 'Informática Empresarial',
		category: 'edu',
		start: '2008',
		end: '2013',
	},
	{
		id: 'hp',
		company: 'Hewlett-Packard',
		role: 'Reporting Analyst / Developer',
		category: 'work',
		start: '2013',
		end: '2014',
	},
	{
		id: 'hangar',
		company: 'Hangar Worldwide\n(Critical Mass Latam)',
		role: 'Front-end developer',
		category: 'work',
		start: '2014',
		end: '2017',
	},
	{
		id: 'sweetrush',
		company: 'SweetRush Inc.',
		role: 'Tech Lead / Software Engineer',
		category: 'work',
		start: '2017',
		end: '2021',
	},
	{
		id: 'thoropass',
		company: 'Thoropass',
		role: 'Software Engineer',
		category: 'work',
		start: '2021',
		end: '2026',
	},
]
