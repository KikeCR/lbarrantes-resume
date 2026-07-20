import { test, expect } from '@playwright/test'

import { HomePage } from '../pages/HomePage'
import { ContactFormPage } from '../pages/ContactFormPage'
import { EMAILJS_ENDPOINT } from '../constants'

test.describe('Contact form', () => {
	test('submits successfully with the EmailJS request mocked', async ({
		page,
	}) => {
		await page.route(EMAILJS_ENDPOINT, async (route) => {
			await route.fulfill({
				status: 200,
				contentType: 'text/plain',
				body: 'OK',
			})
		})

		const homePage = new HomePage(page)
		const contactForm = new ContactFormPage(page)
		await homePage.open()

		await contactForm.fillAndSubmit('en', {
			name: 'Ada Lovelace',
			email: 'ada@example.com',
			message: 'Loved your portfolio!',
		})

		await expect(contactForm.successDialogHeading('en')).toBeVisible()
	})
})
