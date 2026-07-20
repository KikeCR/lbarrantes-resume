import { test, expect } from '@playwright/test'

import { HomePage } from '../pages/HomePage'

test.describe('Smoke', () => {
	test('loads the resume and renders every section', async ({ page }) => {
		const homePage = new HomePage(page)
		await homePage.open()

		await expect(page).toHaveTitle('Luis Barrantes')

		for (const section of Object.values(homePage.sections)) {
			await expect(section).toBeVisible()
		}
	})
})
