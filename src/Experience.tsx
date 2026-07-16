import { useContext } from 'react'
import { Typography } from '@mui/material'
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineOppositeContent,
	TimelineDot,
} from '@mui/lab'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import { Fade } from 'react-awesome-reveal'

import { experiences } from './data/experience'
import { pickTranslation } from './utils/pickTranslation'

import { LanguageContext } from './contexts/language.context'
import { ResumeSubtitle } from './components/ResumeSubtitle'
import { FADE_DURATION_SLOW } from './constants'

const content = {
	en: { sectionTitle: 'Education & Experience' },
	es: { sectionTitle: 'Educación y experiencia' },
}

export const Experience = () => {
	const { language } = useContext(LanguageContext)
	const { sectionTitle } = pickTranslation(content, language)

	return (
		<section
			id="experience-section"
			className="flex min-h-screen items-center justify-center bg-bg py-10 text-font sm:h-screen sm:py-0"
		>
			<Fade direction="up" triggerOnce className="w-full">
				<div className="mx-auto w-[91.6667%] md:w-[83.3333%]">
					<ResumeSubtitle>{sectionTitle}</ResumeSubtitle>
					<div className="mx-auto mt-8 rounded-[20px] bg-timeline-bg py-6 sm:w-[91.6667%] sm:py-12">
						<Fade duration={FADE_DURATION_SLOW} direction="up" triggerOnce>
							<Timeline
								position="alternate"
								sx={{
									marginTop: '16px',
									marginBottom: '16px',
									'& .MuiTimelineDot-root': {
										backgroundColor: 'var(--color-timeline-icon)',
									},
									'& .MuiTimelineConnector-root': {
										backgroundColor: 'var(--color-timeline-connector)',
									},
									'@media (max-width: 599px)': {
										'& .MuiTimelineItem-positionAlternate:nth-of-type(even)': {
											flexDirection: 'initial',
											'& .MuiTimelineContent-root': { textAlign: 'left' },
											'& .MuiTimelineOppositeContent-root': {
												textAlign: 'right',
											},
										},
										'& .MuiTimelineOppositeContent-root': {
											minWidth: '18%',
											padding: '0 10px 0 0',
										},
										'& .MuiTimelineSeparator-root': { minWidth: '10%' },
										'& .MuiTimelineContent-root': { minWidth: '50%' },
									},
								}}
							>
								{experiences.map((exp, i) => (
									<TimelineItem key={exp.id}>
										<TimelineOppositeContent
											variant="body2"
											sx={{
												color: 'var(--color-timeline-timestamp)',
												mt: '10px',
											}}
										>
											{exp.start} - {exp.end}
										</TimelineOppositeContent>
										<TimelineSeparator>
											<TimelineDot color="primary">
												{exp.category === 'edu' ? <SchoolIcon /> : <WorkIcon />}
											</TimelineDot>
											{i < experiences.length - 1 && <TimelineConnector />}
										</TimelineSeparator>
										<TimelineContent>
											<Typography
												variant="h6"
												component="h3"
												sx={{ color: 'var(--color-timeline-text)' }}
											>
												{exp.company}
											</Typography>
											<Typography sx={{ color: 'var(--color-timeline-text)' }}>
												{exp.role}
											</Typography>
										</TimelineContent>
									</TimelineItem>
								))}
							</Timeline>
						</Fade>
					</div>
				</div>
			</Fade>
		</section>
	)
}
