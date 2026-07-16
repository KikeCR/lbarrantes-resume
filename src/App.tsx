import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ResumeApp } from './ResumeApp'
import { ThemeProvider } from './contexts/theme.context'
import { muiTheme } from './theme'

export const App = () => {
	return (
		<div className="App">
			<MuiThemeProvider theme={muiTheme}>
				<ThemeProvider>
					<ResumeApp />
				</ThemeProvider>
			</MuiThemeProvider>
		</div>
	)
}
