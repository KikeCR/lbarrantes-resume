import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { NavbarPageObject } from './test/page-objects/NavbarPageObject';

describe('Navbar', () => {
	it('switches the stored language when a language option is selected', async () => {
		const navbar = new NavbarPageObject();

		expect(navbar.currentLanguage).toBe('en');

		await navbar.selectLanguage('ES');
		expect(navbar.currentLanguage).toBe('es');

		await navbar.selectLanguage('EN');
		expect(navbar.currentLanguage).toBe('en');
	});

	it('toggles dark mode and swaps the theme icon when the theme button is clicked', async () => {
		const navbar = new NavbarPageObject();

		expect(navbar.isDarkMode).toBe(false);
		expect(screen.getByTestId('Brightness4Icon')).toBeInTheDocument();

		await navbar.toggleTheme();

		expect(navbar.isDarkMode).toBe(true);
		expect(screen.getByTestId('Brightness7Icon')).toBeInTheDocument();
	});
});
