import { describe, expect, it } from 'vitest'

import { NowSectionPageObject } from './test/page-objects/NowSectionPageObject'
import { setStoredLanguage } from './test/render'

describe('NowSection', () => {
	it('renders the section title and body in English by default', () => {
		const nowSection = new NowSectionPageObject()
		expect(nowSection.sectionTitle).toBe("What I'm focused on now")
		expect(nowSection.body).toContain('AI agents')
	})

	it('renders the section title and body in Spanish when the stored language is es', () => {
		setStoredLanguage('es')
		const nowSection = new NowSectionPageObject()
		expect(nowSection.sectionTitle).toBe('En qué estoy enfocado ahora')
		expect(nowSection.body).toContain('agentes de IA')
	})
})
