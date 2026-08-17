import type { ReactNode } from 'react'

interface ResumeSubtitleProps {
	children: ReactNode
}

export const ResumeSubtitle = ({ children }: ResumeSubtitleProps) => {
	return (
		<h2 className="flex items-center gap-4 text-4xl sm:text-[2.5rem]">
			<span
				aria-hidden="true"
				className="h-8 w-1.5 shrink-0 rounded-full bg-secondary sm:h-10"
			/>
			{children}
		</h2>
	)
}
