import { Button, type ButtonProps } from '@mui/material'

export const ContactButton = (props: ButtonProps) => {
	return (
		<Button
			{...props}
			sx={{
				backgroundColor: 'var(--color-button)',
				color: 'var(--color-button-text)',
				'&:hover': {
					backgroundColor: 'var(--color-button-hover)',
				},
				...props.sx,
			}}
		/>
	)
}
