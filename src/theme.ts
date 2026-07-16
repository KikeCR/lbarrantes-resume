import { createTheme } from '@mui/material/styles'

// Only typography is customized here — palette/dark-mode stays untouched by
// design, since theme switching is handled entirely through the Tailwind
// `--color-*` custom properties and the `.dark` class (see index.css),
// not MUI's own palette.mode. This just gets the Newsreader/Inter fonts
// (see index.css's --font-display/--font-body) applied consistently across
// every MUI component, instead of touching each one's `sx` individually.
export const muiTheme = createTheme({
	typography: {
		fontFamily: 'var(--font-body)',
		h1: { fontFamily: 'var(--font-display)' },
		h2: { fontFamily: 'var(--font-display)' },
		h3: { fontFamily: 'var(--font-display)' },
		h4: { fontFamily: 'var(--font-display)' },
		h5: { fontFamily: 'var(--font-display)' },
		h6: { fontFamily: 'var(--font-display)' },
	},
})
