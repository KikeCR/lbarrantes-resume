import type { ReactElement } from 'react'
import { render } from '@testing-library/react'

import { LanguageProvider, type Language } from '../contexts/language.context'
import { ThemeProvider } from '../contexts/theme.context'

export const renderWithProviders = (ui: ReactElement) => {
	return render(
		<LanguageProvider>
			<ThemeProvider>{ui}</ThemeProvider>
		</LanguageProvider>,
	)
}

// LanguageProvider reads its initial value from localStorage on mount (see
// useLocalStorageState), and each renderWithProviders call mounts its own
// isolated provider instance with no cross-tree syncing — so to render a
// component in a given language, seed localStorage *before* rendering it
// rather than trying to drive language from another tree's Navbar.
export const setStoredLanguage = (language: Language) => {
	localStorage.setItem('language', JSON.stringify(language))
}
