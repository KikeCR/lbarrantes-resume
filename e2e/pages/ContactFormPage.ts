import type { Page, Locator } from '@playwright/test'

import { CONTACT_FORM_LABEL, SECTION_IDS, type Language } from '../constants'

export interface ContactFormValues {
	name: string
	email: string
	message: string
}

export class ContactFormPage {
	readonly page: Page
	readonly section: Locator

	constructor(page: Page) {
		this.page = page
		this.section = page.locator(`#${SECTION_IDS.contactMe}`)
	}

	async fillAndSubmit(language: Language, values: ContactFormValues) {
		const labels = CONTACT_FORM_LABEL[language]

		await this.section
			.getByRole('textbox', { name: labels.name, exact: true })
			.fill(values.name)
		await this.section
			.getByRole('textbox', { name: labels.email, exact: true })
			.fill(values.email)
		await this.section
			.getByRole('textbox', { name: labels.message, exact: true })
			.fill(values.message)
		await this.section.getByRole('button', { name: labels.submit }).click()
	}

	successDialogHeading(language: Language): Locator {
		return this.page.getByRole('heading', {
			name: CONTACT_FORM_LABEL[language].dialogTitle,
		})
	}
}
