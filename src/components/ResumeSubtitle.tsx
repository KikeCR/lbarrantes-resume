import type { ReactNode } from 'react'
import dotsTitleLight from '../images/dots-bg-light.svg'
import dotsTitleDark from '../images/dots-bg.svg'

interface ResumeSubtitleProps {
	children: ReactNode
}

export const ResumeSubtitle = ({ children }: ResumeSubtitleProps) => {
	return (
		<h2 className="relative text-4xl">
			<img
				src={dotsTitleDark}
				alt=""
				className="absolute left-[-14px] top-[15px] h-[37px] w-[37px] dark:hidden"
			/>
			<img
				src={dotsTitleLight}
				alt=""
				className="absolute left-[-14px] top-[15px] hidden h-[37px] w-[37px] dark:block"
			/>
			{children}
		</h2>
	)
}
