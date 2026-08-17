import type { IconType } from 'react-icons'
import {
	SiNextdotjs,
	SiNodedotjs,
	SiExpress,
	SiSocketdotio,
	SiPrisma,
	SiPostgresql,
	SiRedis,
	SiTypescript,
	SiReact,
	SiTailwindcss,
	SiFramer,
} from 'react-icons/si'

export interface PortfolioProject {
	id: string
	name: string
	liveUrl: string
	liveLabel: string
	githubUrl?: string
	tech: { title: string; Icon: IconType }[]
}

export const portfolioProjects: PortfolioProject[] = [
	{
		id: 'cueball',
		name: 'CueBall',
		liveUrl: 'https://cuebl.com',
		liveLabel: 'cuebl.com',
		githubUrl: 'https://github.com/KikeCR/cueball',
		tech: [
			{ title: 'Next.js', Icon: SiNextdotjs },
			{ title: 'Node.js', Icon: SiNodedotjs },
			{ title: 'Socket.IO', Icon: SiSocketdotio },
			{ title: 'PostgreSQL', Icon: SiPostgresql },
			{ title: 'Redis', Icon: SiRedis },
			{ title: 'TypeScript', Icon: SiTypescript },
		],
	},
	{
		id: 'sleeveside',
		name: 'Sleeveside',
		liveUrl: 'https://sleeveside.net',
		liveLabel: 'sleeveside.net',
		tech: [
			{ title: 'Next.js', Icon: SiNextdotjs },
			{ title: 'Express', Icon: SiExpress },
			{ title: 'Prisma', Icon: SiPrisma },
			{ title: 'PostgreSQL', Icon: SiPostgresql },
			{ title: 'Redis', Icon: SiRedis },
			{ title: 'Socket.IO', Icon: SiSocketdotio },
		],
	},
	{
		id: 'barriokits',
		name: 'Barrio Kits',
		liveUrl: 'https://barriokits.dev',
		liveLabel: 'barriokits.dev',
		tech: [
			{ title: 'Next.js', Icon: SiNextdotjs },
			{ title: 'React', Icon: SiReact },
			{ title: 'TypeScript', Icon: SiTypescript },
			{ title: 'Tailwind', Icon: SiTailwindcss },
			{ title: 'Framer Motion', Icon: SiFramer },
		],
	},
]
