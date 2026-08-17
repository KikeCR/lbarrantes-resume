import { LuCircleDot } from 'react-icons/lu'

// Recreations of each app's own favicon/brand mark (see apps/web/app/icon.tsx
// in the cueball and sleeveside repos), kept in their real brand colors
// rather than the resume's terracotta palette so they read as actual app
// icons, not generic themed glyphs.
export const CueBallMark = () => (
	<span
		className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm"
		style={{ background: 'linear-gradient(135deg, #6467f2 0%, #5048e5 100%)' }}
	>
		<LuCircleDot className="h-6 w-6 text-white" strokeWidth={2.25} />
	</span>
)

export const SleevesideMark = () => (
	<span
		className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-sm"
		style={{ background: '#0d0a08' }}
	>
		<span
			className="flex h-6 w-6 items-center justify-center rounded-full"
			style={{ background: '#ec883c' }}
		>
			<span
				className="h-1.5 w-1.5 rounded-full"
				style={{ background: '#0d0a08' }}
			/>
		</span>
	</span>
)

export const BarrioKitsMark = () => (
	<span
		className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm"
		style={{ background: '#c2410c' }}
	>
		<svg width="24" height="24" viewBox="0 0 64 64" aria-hidden="true">
			<path
				d="M25 18 14 32l11 14"
				fill="none"
				stroke="#ffffff"
				strokeWidth={5.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="m39 18 11 14-11 14"
				fill="none"
				stroke="#ffffff"
				strokeWidth={5.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<rect x="27.5" y="27.5" width="9" height="9" rx="1.5" fill="#ffffff" />
		</svg>
	</span>
)
