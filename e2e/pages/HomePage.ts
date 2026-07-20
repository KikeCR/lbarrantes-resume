import type { Page, Locator } from '@playwright/test'

import { DOWNLOAD_RESUME_LABEL, SECTION_IDS, type Language } from '../constants'

export class HomePage {
	readonly page: Page
	readonly sections: Record<keyof typeof SECTION_IDS, Locator>

	constructor(page: Page) {
		this.page = page
		this.sections = {
			profile: page.locator(`#${SECTION_IDS.profile}`),
			aboutMe: page.locator(`#${SECTION_IDS.aboutMe}`),
			techStack: page.locator(`#${SECTION_IDS.techStack}`),
			experience: page.locator(`#${SECTION_IDS.experience}`),
			now: page.locator(`#${SECTION_IDS.now}`),
			contactMe: page.locator(`#${SECTION_IDS.contactMe}`),
		}
	}

	async open() {
		await this.page.goto('/')
	}

	get aboutMeHeading(): Locator {
		return this.sections.aboutMe.getByRole('heading', { level: 2 })
	}

	downloadResumeButton(
		language: Language,
		state: 'idle' | 'generating' = 'idle',
	): Locator {
		return this.sections.profile.getByRole('button', {
			name: DOWNLOAD_RESUME_LABEL[language][state],
		})
	}
}
