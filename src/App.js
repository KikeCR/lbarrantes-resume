import GlobalStyle from './GlobalStyle';
import ResumeApp from './ResumeApp';
import { ThemeProvider } from './contexts/theme.context';

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<ThemeProvider>
				<ResumeApp />
			</ThemeProvider>
		</div>
	);
}

export default App;
