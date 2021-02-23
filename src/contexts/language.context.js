import React, { createContext } from 'react';
import useLocalStorageState from '../hooks/useLocalStorageState';

export const LanguageContext = createContext();

export function LanguageProvider(props) {
	const [ language, setLanguage ] = useLocalStorageState('language', 'en');
	const changeLanguage = (e) => setLanguage(e.target.value);
	return <LanguageContext.Provider value={{ language, changeLanguage }}>{props.children}</LanguageContext.Provider>;
}
