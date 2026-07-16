export function pickTranslation<T>(translations: Record<'en' | 'es', T>, language: 'en' | 'es'): T {
	return translations[language] ?? translations.en;
}
