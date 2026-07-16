import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Navbar from '../../Navbar';
import { renderWithProviders } from '../render';

export class NavbarPageObject {
	private user = userEvent.setup();

	constructor() {
		renderWithProviders(<Navbar />);
	}

	async selectLanguage(lang: 'EN' | 'ES') {
		await this.user.click(screen.getByRole('combobox', { name: 'Language' }));
		await this.user.click(await screen.findByRole('option', { name: lang }));
	}

	async toggleTheme() {
		await this.user.click(screen.getByRole('button', { name: 'Toggle theme' }));
	}

	get currentLanguage(): string | null {
		const raw = localStorage.getItem('language');
		return raw ? JSON.parse(raw) : null;
	}

	get isDarkMode(): boolean {
		const raw = localStorage.getItem('theme');
		return raw ? JSON.parse(raw) : false;
	}

	get themeIconTestId(): string {
		return this.isDarkMode ? 'Brightness7Icon' : 'Brightness4Icon';
	}
}
