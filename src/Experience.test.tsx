import { describe, expect, it } from 'vitest'

import { ExperiencePageObject } from './test/page-objects/ExperiencePageObject'
import { experiences } from './data/experience'
import { setStoredLanguage } from './test/render'

describe('Experience', () => {
	it('renders every entry from src/data/experience.ts', () => {
		const experience = new ExperiencePageObject()

		expect(experience.entries).toEqual(
			experiences.map((exp) => ({
				company: exp.company,
				role: exp.role,
				dateRange: `${exp.start} - ${exp.end}`,
			})),
		)
	})

	it('renders the section title in English by default', () => {
		const experience = new ExperiencePageObject()
		expect(experience.sectionTitle).toBe('Education & Experience')
	})

	it('renders the section title in Spanish when the stored language is es', () => {
		setStoredLanguage('es')
		const experience = new ExperiencePageObject()
		expect(experience.sectionTitle).toBe('Educación y experiencia')
	})
})
