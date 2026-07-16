export const pickTranslation = <T>(
	translations: Record<'en' | 'es', T>,
	language: 'en' | 'es',
): T => translations[language] ?? translations.en
