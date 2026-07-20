import type { IconType } from 'react-icons'
import {
	SiReact,
	SiTypescript,
	SiTailwindcss,
	SiStorybook,
	SiMui,
	SiChakraui,
	SiVite,
	SiDjango,
	SiPython,
	SiPostgresql,
	SiGraphql,
	SiAnthropic,
	SiGit,
} from 'react-icons/si'

import { SiPlaywright } from './playwrightIcon'

export interface SkillLogo {
	title: string
	Icon: IconType
	category: 'frontend' | 'backend'
	/** Set to false to keep a skill out of the grid and show it only in the marquee. */
	showInGrid?: boolean
}

export const skillLogos: SkillLogo[] = [
	{ title: 'React', Icon: SiReact, category: 'frontend' },
	{ title: 'TypeScript', Icon: SiTypescript, category: 'frontend' },
	{ title: 'Tailwind', Icon: SiTailwindcss, category: 'frontend' },
	{ title: 'Design Systems', Icon: SiStorybook, category: 'frontend' },
	{ title: 'Material UI', Icon: SiMui, category: 'frontend' },
	{
		title: 'Chakra UI',
		Icon: SiChakraui,
		category: 'frontend',
		showInGrid: false,
	},
	{ title: 'Vite', Icon: SiVite, category: 'frontend' },
	{ title: 'Django', Icon: SiDjango, category: 'backend' },
	{ title: 'Python', Icon: SiPython, category: 'backend' },
	{ title: 'PostgreSQL', Icon: SiPostgresql, category: 'backend' },
	{ title: 'GraphQL', Icon: SiGraphql, category: 'backend' },
	{ title: 'LLM Tooling', Icon: SiAnthropic, category: 'backend' },
	{ title: 'Git', Icon: SiGit, category: 'backend' },
	{
		title: 'Playwright',
		Icon: SiPlaywright,
		category: 'backend',
		showInGrid: false,
	},
]
