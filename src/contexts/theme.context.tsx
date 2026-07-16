import { createContext, useEffect, type ReactNode } from 'react'
import { useToggleState } from '../hooks/useToggleState'

interface ThemeContextValue {
	isDarkMode: boolean
	toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue>({
	isDarkMode: false,
	toggleTheme: () => {},
})

export const ThemeProvider = (props: { children: ReactNode }) => {
	const [isDarkMode, toggleTheme] = useToggleState('theme', false)

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDarkMode)
	}, [isDarkMode])

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	)
}
