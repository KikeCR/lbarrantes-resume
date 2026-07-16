import type { IconType } from 'react-icons'
import {
	SiReact,
	SiTypescript,
	SiVite,
	SiDjango,
	SiPython,
	SiPostgresql,
	SiGraphql,
	SiMui,
	SiAnthropic,
	SiGit,
} from 'react-icons/si'

export interface SkillLogo {
	title: string
	Icon: IconType
}

export const skillLogos: SkillLogo[] = [
	{ title: 'React', Icon: SiReact },
	{ title: 'TypeScript', Icon: SiTypescript },
	{ title: 'Vite', Icon: SiVite },
	{ title: 'Django', Icon: SiDjango },
	{ title: 'Python', Icon: SiPython },
	{ title: 'PostgreSQL', Icon: SiPostgresql },
	{ title: 'GraphQL', Icon: SiGraphql },
	{ title: 'Material UI', Icon: SiMui },
	{ title: 'LLM Tooling', Icon: SiAnthropic },
	{ title: 'Git', Icon: SiGit },
]
