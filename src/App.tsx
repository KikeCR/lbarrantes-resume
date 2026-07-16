import ResumeApp from './ResumeApp';
import { ThemeProvider } from './contexts/theme.context';

function App() {
	return (
		<div className="App">
			<ThemeProvider>
				<ResumeApp />
			</ThemeProvider>
		</div>
	);
}

export default App;
