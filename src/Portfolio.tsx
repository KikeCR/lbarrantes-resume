import { useContext, type ReactNode } from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import GitHubIcon from '@mui/icons-material/GitHub'
import LockIcon from '@mui/icons-material/Lock'
import { Fade } from 'react-awesome-reveal'

import { portfolioProjects } from './data/portfolio'
import { pickTranslation } from './utils/pickTranslation'

import { LanguageContext } from './contexts/language.context'
import { ResumeSubtitle } from './components/ResumeSubtitle'
import {
	CueBallMark,
	SleevesideMark,
	BarrioKitsMark,
} from './components/ProjectMarks'

const content = {
	en: {
		sectionTitle: 'Live Projects',
		liveBadge: 'Live',
		viewLive: 'Visit site',
		sourceLabel: 'Source',
		sourcePrivateLabel: 'Source is private',
		taglines: {
			cueball: 'Real-time · WebSockets',
			sleeveside: 'Social · Discogs API',
			barriokits: 'Boilerplates · Templates',
		} as Record<string, string>,
		descriptions: {
			cueball:
				'A shared watch-party queue for YouTube. Everyone in the room adds videos and votes live, with the queue synced in real time and played on a TV either through a real YouTube playlist or direct casting via the Lounge API.',
			sleeveside:
				'A multi-user vinyl collection tracker with a visual cover-art wall, condition grading, and play logs, plus a social layer and one-click jumps to Spotify and Apple Music to actually listen.',
			barriokits:
				'A storefront for developer boilerplate starters, code templates, Notion systems, and Canva templates, built to help you start your next project from a real foundation instead of a blank file.',
		} as Record<string, string>,
	},
	es: {
		sectionTitle: 'Proyectos en vivo',
		liveBadge: 'En vivo',
		viewLive: 'Visitar sitio',
		sourceLabel: 'Código',
		sourcePrivateLabel: 'Código fuente privado',
		taglines: {
			cueball: 'Tiempo real · WebSockets',
			sleeveside: 'Social · API de Discogs',
			barriokits: 'Boilerplates · Plantillas',
		} as Record<string, string>,
		descriptions: {
			cueball:
				'Una cola compartida de reproducción para YouTube: cualquiera en la sala agrega videos y vota en tiempo real, con la cola sincronizada al instante y reproducida en un TV mediante una playlist real de YouTube o transmisión directa vía la API de Lounge.',
			sleeveside:
				'Un rastreador de colecciones de vinilos multiusuario con un muro visual de portadas, calificación de condición, historial de reproducciones y una capa social, además de enlaces directos a Spotify y Apple Music para escuchar al instante.',
			barriokits:
				'Una tienda de boilerplates para desarrolladores, plantillas de código, sistemas de Notion y plantillas de Canva, pensada para empezar tu próximo proyecto desde una base real en lugar de un archivo en blanco.',
		} as Record<string, string>,
	},
}

const projectMarks: Record<string, ReactNode> = {
	cueball: <CueBallMark />,
	sleeveside: <SleevesideMark />,
	barriokits: <BarrioKitsMark />,
}

export const Portfolio = () => {
	const { language } = useContext(LanguageContext)
	const {
		sectionTitle,
		liveBadge,
		viewLive,
		sourceLabel,
		sourcePrivateLabel,
		taglines,
		descriptions,
	} = pickTranslation(content, language)

	return (
		<section
			id="portfolio-section"
			className="flex min-h-screen items-center justify-center bg-bg py-10 text-font sm:py-16"
		>
			<Fade direction="up" triggerOnce className="w-full">
				<div className="mx-auto w-[91.6667%] md:w-[83.3333%]">
					<ResumeSubtitle>{sectionTitle}</ResumeSubtitle>
					<div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
						{portfolioProjects.map((project) => (
							<Fade key={project.id} direction="up" triggerOnce>
								<article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-font/10 bg-font/[0.02] p-8 transition-colors hover:border-link/40 sm:p-9">
									<div className="flex items-start justify-between gap-4">
										<div className="flex items-center gap-4">
											{projectMarks[project.id]}
											<div>
												<span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
													{taglines[project.id]}
												</span>
												<h3 className="mt-1 text-2xl font-semibold sm:text-[1.75rem]">
													{project.name}
												</h3>
											</div>
										</div>
										<span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary">
											<span className="relative flex h-1.5 w-1.5">
												<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
												<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
											</span>
											{liveBadge}
										</span>
									</div>

									<p className="mt-6 flex-1 leading-relaxed text-font/70">
										{descriptions[project.id]}
									</p>

									<div className="mt-6 h-px w-full bg-gradient-to-r from-font/10 to-transparent" />

									<div className="mt-6 flex flex-wrap gap-2">
										{project.tech.map(({ title, Icon }) => (
											<span
												key={title}
												className="inline-flex items-center gap-1.5 rounded-full border border-font/10 bg-font/[0.03] px-3 py-1.5 text-xs font-medium text-font/80"
											>
												<Icon size={14} />
												{title}
											</span>
										))}
									</div>

									<div className="mt-8 flex items-center gap-5">
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 rounded-full bg-button px-5 py-2.5 text-sm font-semibold text-button-text no-underline transition-colors hover:bg-button-hover"
										>
											<OpenInNewIcon sx={{ fontSize: 16 }} />
											{viewLive}
										</a>
										{project.githubUrl ? (
											<a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-1.5 text-sm font-medium text-font/60 no-underline transition-colors hover:text-secondary"
											>
												<GitHubIcon sx={{ fontSize: 18 }} />
												{sourceLabel}
											</a>
										) : (
											<span className="inline-flex items-center gap-1.5 text-sm text-font/40">
												<LockIcon sx={{ fontSize: 16 }} />
												{sourcePrivateLabel}
											</span>
										)}
									</div>
								</article>
							</Fade>
						))}
					</div>
				</div>
			</Fade>
		</section>
	)
}
