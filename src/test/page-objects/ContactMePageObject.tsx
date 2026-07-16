import { screen } from '@testing-library/react';

import ContactMe from '../../ContactMe';
import { renderWithProviders } from '../render';

export class ContactMePageObject {
	constructor() {
		renderWithProviders(<ContactMe />);
	}

	get sectionTitle(): string | null {
		return screen.getByRole('heading', { level: 2 }).textContent;
	}

	get mailtoHref(): string | null {
		return screen.getByRole('link').getAttribute('href');
	}
}
