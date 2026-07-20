import { test, expect } from '@playwright/test'

import { HomePage } from '../pages/HomePage'
import { NavbarPage } from '../pages/NavbarPage'
import { ABOUT_ME_HEADING } from '../constants'

test.describe('Navbar', () => {
	test('logo click scrolls back to the top of the page', async ({ page }) => {
		const homePage = new HomePage(page)
		const navbar = new NavbarPage(page)
		await homePage.open()

		await homePage.sections.contactMe.scrollIntoViewIfNeeded()
		expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(0)

		await navbar.clickLogo()

		await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0)
	})

	test('switches the visible copy between English and Spanish', async ({
		page,
	}) => {
		const homePage = new HomePage(page)
		const navbar = new NavbarPage(page)
		await homePage.open()

		await expect(homePage.aboutMeHeading).toHaveText(ABOUT_ME_HEADING.en)

		await navbar.selectLanguage('es')

		await expect(homePage.aboutMeHeading).toHaveText(ABOUT_ME_HEADING.es)
	})

	test('toggles dark mode and persists it across a reload', async ({
		page,
	}) => {
		const homePage = new HomePage(page)
		const navbar = new NavbarPage(page)
		await homePage.open()

		expect(await navbar.isDarkMode()).toBe(false)

		await navbar.toggleTheme()
		expect(await navbar.isDarkMode()).toBe(true)

		await page.reload()
		expect(await navbar.isDarkMode()).toBe(true)
	})
})
