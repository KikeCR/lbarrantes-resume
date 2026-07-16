import { ResumeApp } from './ResumeApp'
import { ThemeProvider } from './contexts/theme.context'

export const App = () => {
	return (
		<div className="App">
			<ThemeProvider>
				<ResumeApp />
			</ThemeProvider>
		</div>
	)
}
