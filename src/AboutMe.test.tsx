import { describe, expect, it } from 'vitest'

import { AboutMePageObject } from './test/page-objects/AboutMePageObject'
import { setStoredLanguage } from './test/render'

describe('AboutMe', () => {
	it('renders the section title in English by default', () => {
		const aboutMe = new AboutMePageObject()
		expect(aboutMe.sectionTitle).toBe('Who is Luis Barrantes?')
	})

	it('renders the section title in Spanish when the stored language is es', () => {
		setStoredLanguage('es')
		const aboutMe = new AboutMePageObject()
		expect(aboutMe.sectionTitle).toBe('¿Quién es Luis Barrantes?')
	})
})
