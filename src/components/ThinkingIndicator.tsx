const DOT_STAGGER_SECONDS = 0.16
const PULSE_DURATION_SECONDS = 1.4

export const ThinkingIndicator = () => {
	return (
		<div className="flex justify-center gap-2" role="img" aria-label="Thinking">
			{[0, 1, 2].map((i) => (
				<span
					key={i}
					className="h-2.5 w-2.5 rounded-full bg-link [animation-iteration-count:infinite] [animation-name:thinking-dot] [animation-timing-function:ease-in-out]"
					style={{
						animationDuration: `${PULSE_DURATION_SECONDS}s`,
						animationDelay: `${i * DOT_STAGGER_SECONDS}s`,
					}}
				/>
			))}
		</div>
	)
}
