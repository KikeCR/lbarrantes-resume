import { describe, expect, it } from 'vitest'

import { TechLogosPageObject } from './test/page-objects/TechLogosPageObject'
import { skillLogos } from './data/skillLogos'

describe('TechLogos', () => {
	it('renders every entry from src/data/skillLogos.ts', () => {
		const techLogos = new TechLogosPageObject()
		skillLogos.forEach(({ title }) => {
			expect(techLogos.hasLogo(title)).toBe(true)
		})
	})

	it('renders the section title', () => {
		const techLogos = new TechLogosPageObject()
		expect(techLogos.sectionTitle).toBe('Tech Stack')
	})
})
