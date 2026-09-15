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
	SiFastapi,
	SiFlask,
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
	SiDocker,
	SiGithubactions,
	SiDeepseek,
	SiCrewai,
} from 'react-icons/si'

import { SiPlaywright } from './playwrightIcon'

export interface SkillLogo {
	title: string
	Icon: IconType
	category: 'frontend' | 'backend' | 'ai'
	/** Set to false to keep a skill out of the grid and show it only in the marquee. */
	showInGrid?: boolean
}

export const skillLogos: SkillLogo[] = [
	{ title: 'React', Icon: SiReact, category: 'frontend' },
	{ title: 'TypeScript', Icon: SiTypescript, category: 'frontend' },
	{ title: 'Tailwind', Icon: SiTailwindcss, category: 'frontend' },
	{
		title: 'Radix UI',
		Icon: SiRadixui,
		category: 'frontend',
		showInGrid: false,
	},
	{ title: 'Material UI', Icon: SiMui, category: 'frontend' },
	{
		title: 'Chakra UI',
		Icon: SiChakraui,
		category: 'frontend',
		showInGrid: false,
	},
	{ title: 'Vite', Icon: SiVite, category: 'frontend' },
	{ title: 'Next.js', Icon: SiNextdotjs, category: 'frontend' },
	{ title: 'Django', Icon: SiDjango, category: 'backend' },
	{ title: 'FastAPI', Icon: SiFastapi, category: 'backend', showInGrid: false },
	{ title: 'Flask', Icon: SiFlask, category: 'backend', showInGrid: false },
	{ title: 'Python', Icon: SiPython, category: 'backend' },
	{ title: 'Node.js', Icon: SiNodedotjs, category: 'backend' },
	{ title: 'Express', Icon: SiExpress, category: 'backend' },
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
	{ title: 'Git', Icon: SiGit, category: 'backend', showInGrid: false },
	{
		title: 'Docker',
		Icon: SiDocker,
		category: 'backend',
		showInGrid: false,
	},
	{
		title: 'GitHub Actions',
		Icon: SiGithubactions,
		category: 'backend',
		showInGrid: false,
	},
	{
		title: 'Playwright',
		Icon: SiPlaywright,
		category: 'backend',
		showInGrid: false,
	},
	{ title: 'DeepSeek', Icon: SiDeepseek, category: 'ai', showInGrid: false },
	{ title: 'CrewAI', Icon: SiCrewai, category: 'ai', showInGrid: false },
	{
		title: 'LLM Tooling',
		Icon: SiAnthropic,
		category: 'ai',
		showInGrid: false,
	},
]
