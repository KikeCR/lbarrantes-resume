import type { Page, Locator } from '@playwright/test'

import { ARIA_LABELS, LANGUAGE_OPTION, type Language } from '../constants'

export class NavbarPage {
	readonly page: Page
	readonly logo: Locator
	readonly languageSelect: Locator
	readonly themeToggle: Locator

	constructor(page: Page) {
		this.page = page
		this.logo = page.getByRole('link', { name: ARIA_LABELS.home })
		this.languageSelect = page.getByRole('combobox', {
			name: ARIA_LABELS.language,
		})
		this.themeToggle = page.getByRole('button', {
			name: ARIA_LABELS.toggleTheme,
		})
	}

	async clickLogo() {
		await this.logo.click()
	}

	async selectLanguage(language: Language) {
		await this.languageSelect.click()
		await this.page
			.getByRole('option', { name: LANGUAGE_OPTION[language] })
			.click()
	}

	async toggleTheme() {
		await this.themeToggle.click()
	}

	isDarkMode(): Promise<boolean> {
		return this.page.evaluate(() =>
			document.documentElement.classList.contains('dark'),
		)
	}
}
