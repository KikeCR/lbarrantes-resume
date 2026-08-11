import type { IconType } from 'react-icons'
import {
	SiReact,
	SiTypescript,
	SiTailwindcss,
	SiRadixui,
	SiMui,
	SiChakraui,
	SiVite,
	SiNextdotjs,
	SiDjango,
	SiPython,
	SiNodedotjs,
	SiExpress,
	SiPostgresql,
	SiPrisma,
	SiRedis,
	SiSocketdotio,
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
	{ title: 'Radix UI', Icon: SiRadixui, category: 'frontend' },
	{ title: 'Material UI', Icon: SiMui, category: 'frontend' },
	{
		title: 'Chakra UI',
		Icon: SiChakraui,
		category: 'frontend',
		showInGrid: false,
	},
	{ title: 'Vite', Icon: SiVite, category: 'frontend' },
	{
		title: 'Next.js',
		Icon: SiNextdotjs,
		category: 'frontend',
		showInGrid: false,
	},
	{ title: 'Django', Icon: SiDjango, category: 'backend' },
	{ title: 'Python', Icon: SiPython, category: 'backend' },
	{ title: 'Node.js', Icon: SiNodedotjs, category: 'backend' },
	{
		title: 'Express',
		Icon: SiExpress,
		category: 'backend',
		showInGrid: false,
	},
	{ title: 'PostgreSQL', Icon: SiPostgresql, category: 'backend' },
	{ title: 'Prisma', Icon: SiPrisma, category: 'backend', showInGrid: false },
	{ title: 'Redis', Icon: SiRedis, category: 'backend', showInGrid: false },
	{
		title: 'Socket.IO',
		Icon: SiSocketdotio,
		category: 'backend',
		showInGrid: false,
	},
	{ title: 'GraphQL', Icon: SiGraphql, category: 'backend' },
	{
		title: 'LLM Tooling',
		Icon: SiAnthropic,
		category: 'backend',
		showInGrid: false,
	},
	{ title: 'Git', Icon: SiGit, category: 'backend' },
	{
		title: 'Playwright',
		Icon: SiPlaywright,
		category: 'backend',
		showInGrid: false,
	},
]
