import { createContext, type ReactNode } from 'react'
import type { SelectChangeEvent } from '@mui/material'
import { useLocalStorageState } from '../hooks/useLocalStorageState'

export type Language = 'en' | 'es'

interface LanguageContextValue {
	language: Language
	changeLanguage: (e: SelectChangeEvent<Language>) => void
}

export const LanguageContext = createContext<LanguageContextValue>({
	language: 'en',
	changeLanguage: () => {},
})

export const LanguageProvider = (props: { children: ReactNode }) => {
	const [language, setLanguage] = useLocalStorageState<Language>(
		'language',
		'en',
	)
	const changeLanguage = (e: SelectChangeEvent<Language>) =>
		setLanguage(e.target.value as Language)
	return (
		<LanguageContext.Provider value={{ language, changeLanguage }}>
			{props.children}
		</LanguageContext.Provider>
	)
}
