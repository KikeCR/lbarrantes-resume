import { useContext } from 'react'
import { Fade } from 'react-awesome-reveal'

import { skillLogos, type SkillLogo } from './data/skillLogos'
import { pickTranslation } from './utils/pickTranslation'

import { LanguageContext } from './contexts/language.context'
import { ResumeSubtitle } from './components/ResumeSubtitle'

const content = {
	en: {
		sectionTitle: 'Tech Stack',
		frontend: 'Front-end',
		backend: 'Back-end',
	},
	es: {
		sectionTitle: 'Stack Tecnológico',
		frontend: 'Front-end',
		backend: 'Back-end',
	},
}

const frontendLogos = skillLogos.filter((logo) => logo.category === 'frontend')
const backendLogos = skillLogos.filter((logo) => logo.category === 'backend')
const reversedSkillLogos = [...skillLogos].reverse()

const MARQUEE_DURATION_SECONDS = 36
// Two copies only guarantee a seamless loop if one copy is at least as wide
// as the viewport; on wide screens 11 pills fall short, so the strip runs
// out of content before the loop resets. Three copies keeps two full copies
// on screen at all times for any realistic viewport width.
const MARQUEE_COPIES = 3
const MARQUEE_OFFSET_PERCENT = 100 / MARQUEE_COPIES

export const TechLogos = () => {
	const { language } = useContext(LanguageContext)
	const { sectionTitle, frontend, backend } = pickTranslation(content, language)

	return (
		<section
			id="tech-stack-section"
			className="flex min-h-screen items-center justify-center bg-bg py-10 text-font sm:py-16"
		>
			<Fade direction="up" triggerOnce className="w-full">
				<div className="w-full">
					<div className="mx-auto w-[91.6667%] md:w-[83.3333%]">
						<ResumeSubtitle>{sectionTitle}</ResumeSubtitle>
						<TechLogoGroup label={frontend} logos={frontendLogos} />
					</div>
					<TechMarqueeDivider />
					<div className="mx-auto w-[91.6667%] md:w-[83.3333%]">
						<TechLogoGroup label={backend} logos={backendLogos} />
					</div>
				</div>
			</Fade>
		</section>
	)
}

interface TechLogoGroupProps {
	label: string
	logos: SkillLogo[]
}

const TechLogoGroup = ({ label, logos }: TechLogoGroupProps) => (
	<div className="mt-8">
		<h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-font/60">
			<span className="h-1.5 w-1.5 rounded-full bg-secondary" />
			{label}
		</h3>
		<div className="mt-4 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:gap-8">
			{logos.map(({ title, Icon }) => (
				<div
					key={title}
					className="flex flex-col items-center gap-4 rounded-2xl border border-font/10 py-10 text-center transition-colors hover:border-link/40 hover:text-link lg:py-14"
				>
					<Icon className="text-4xl lg:text-5xl" />
					<span className="text-sm font-medium lg:text-base">{title}</span>
				</div>
			))}
		</div>
	</div>
)

const TechMarqueeDivider = () => (
	<div className="relative my-10 flex flex-col gap-4 overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
		<TechMarqueeRow logos={skillLogos} direction="left" />
		<TechMarqueeRow logos={reversedSkillLogos} direction="right" />
	</div>
)

interface TechMarqueeRowProps {
	logos: SkillLogo[]
	direction: 'left' | 'right'
}

const TechMarqueeRow = ({ logos, direction }: TechMarqueeRowProps) => {
	const repeatedLogos = Array.from(
		{ length: MARQUEE_COPIES },
		() => logos,
	).flat()

	return (
		<div
			className={`marquee-track flex w-max items-center gap-4 opacity-60 ${
				direction === 'left' ? 'marquee-track--left' : 'marquee-track--right'
			}`}
			style={
				{
					animationDuration: `${MARQUEE_DURATION_SECONDS}s`,
					'--marquee-offset': `-${MARQUEE_OFFSET_PERCENT}%`,
				} as React.CSSProperties
			}
		>
			{repeatedLogos.map(({ title, Icon }, i) => (
				<div
					key={`${title}-${i}`}
					aria-hidden={i >= logos.length}
					className="flex shrink-0 items-center gap-2 rounded-full border border-font/10 px-4 py-2"
				>
					<Icon size={16} />
					<span className="whitespace-nowrap text-xs font-medium uppercase tracking-wide">
						{title}
					</span>
				</div>
			))}
		</div>
	)
}
