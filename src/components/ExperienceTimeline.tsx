import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'

import type { ExperienceEntry } from '../data/experience'

interface ExperienceTimelineProps {
	entries: ExperienceEntry[]
}

export const ExperienceTimeline = ({ entries }: ExperienceTimelineProps) => {
	return (
		<ol className="mx-auto max-w-2xl">
			{entries.map((entry, i) => {
				const isLast = i === entries.length - 1

				return (
					<li
						key={entry.id}
						role="listitem"
						className="flex gap-5 sm:gap-6"
					>
						<div className="flex flex-col items-center">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-timeline-icon text-button-text">
								{entry.category === 'edu' ? (
									<SchoolIcon fontSize="small" />
								) : (
									<WorkIcon fontSize="small" />
								)}
							</div>
							{!isLast && (
								<div className="mt-2 mb-2 w-px flex-1 bg-timeline-connector" />
							)}
						</div>

						<div className={`flex-1 pt-1.5 ${isLast ? '' : 'pb-10'}`}>
							<div
								data-testid="experience-date"
								className="font-mono text-xs text-timeline-timestamp sm:text-sm"
							>
								{entry.start} - {entry.end}
							</div>
							<h3 className="mt-1 font-display text-lg font-semibold text-timeline-text">
								{entry.company}
							</h3>
							<p className="text-timeline-text/80">{entry.role}</p>
						</div>
					</li>
				)
			})}
		</ol>
	)
}
