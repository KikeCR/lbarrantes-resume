import { createTheme } from '@mui/material/styles'

// Palette/dark-mode stays untouched by design — theme switching is handled
// entirely through the Tailwind `--color-*` custom properties and the
// `.dark` class (see index.css), not MUI's own palette.mode. This file only
// gets the Space Grotesk/Work Sans/JetBrains Mono fonts (see index.css's
// --font-display/--font-body/--font-mono) and the site's one radius scale
// (--radius-control/--radius-card) applied consistently across every MUI
// component, instead of touching each one's `sx` individually.
export const muiTheme = createTheme({
	typography: {
		fontFamily: 'var(--font-body)',
		h1: { fontFamily: 'var(--font-display)' },
		h2: { fontFamily: 'var(--font-display)' },
		h3: { fontFamily: 'var(--font-display)' },
		h4: { fontFamily: 'var(--font-display)' },
		h5: { fontFamily: 'var(--font-display)' },
		h6: { fontFamily: 'var(--font-display)' },
		overline: { fontFamily: 'var(--font-mono)' },
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 'var(--radius-control)',
					textTransform: 'none',
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: 'var(--radius-control)',
				},
			},
		},
		MuiDialog: {
			styleOverrides: {
				paper: {
					borderRadius: 'var(--radius-card)',
				},
			},
		},
		MuiMenu: {
			styleOverrides: {
				paper: {
					borderRadius: 'var(--radius-control)',
				},
			},
		},
	},
})
