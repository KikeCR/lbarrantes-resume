import { describe, expect, it } from 'vitest'

import { PortfolioPageObject } from './test/page-objects/PortfolioPageObject'
import { portfolioProjects } from './data/portfolio'
import { setStoredLanguage } from './test/render'

describe('Portfolio', () => {
	it('renders every entry from src/data/portfolio.ts with a working live link', () => {
		const portfolio = new PortfolioPageObject()
		portfolioProjects.forEach(({ name, liveUrl }) => {
			expect(portfolio.hasProjectName(name)).toBe(true)
			expect(portfolio.hasLiveLink(liveUrl)).toBe(true)
		})
	})

	it('renders the section title in English by default', () => {
		const portfolio = new PortfolioPageObject()
		expect(portfolio.sectionTitle).toBe('Live Projects')
	})

	it('renders the section title in Spanish when the stored language is es', () => {
		setStoredLanguage('es')
		const portfolio = new PortfolioPageObject()
		expect(portfolio.sectionTitle).toBe('Proyectos en vivo')
	})
})
