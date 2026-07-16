import { describe, expect, it } from 'vitest'

import { FooterPageObject } from './test/page-objects/FooterPageObject'
import { CONTACT_LINKS } from './data/contactLinks'

describe('Footer', () => {
	it('renders the current year and copyright name', () => {
		const footer = new FooterPageObject()
		expect(footer.copyrightText).toContain(String(new Date().getFullYear()))
		expect(footer.copyrightText).toContain('Luis Barrantes')
	})

	it('links to GitHub and LinkedIn', () => {
		const footer = new FooterPageObject()
		expect(footer.githubLink.href).toBe(CONTACT_LINKS.github)
		expect(footer.linkedInLink.href).toBe(CONTACT_LINKS.linkedIn)
	})

	it('renders a resume download control', () => {
		const footer = new FooterPageObject()
		expect(footer.downloadResumeButton).toHaveAccessibleName('Download Resume')
	})
})
