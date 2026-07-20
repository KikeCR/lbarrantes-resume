import { test, expect } from '@playwright/test'

import { HomePage } from '../pages/HomePage'

test.describe('Download resume', () => {
	test('generates and downloads a PDF', async ({ page }) => {
		const homePage = new HomePage(page)
		await homePage.open()

		const downloadPromise = page.waitForEvent('download')
		await homePage.downloadResumeButton('en').click()

		await expect(
			homePage.downloadResumeButton('en', 'generating'),
		).toBeVisible()

		const download = await downloadPromise
		expect(download.suggestedFilename()).toBe('Luis-Barrantes-Resume-en.pdf')

		await expect(homePage.downloadResumeButton('en')).toBeVisible()
	})
})
