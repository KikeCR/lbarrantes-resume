import { screen } from '@testing-library/react';

import Experience from '../../Experience';
import { renderWithProviders } from '../render';

export interface ExperienceEntryText {
	company: string;
	role: string;
	dateRange: string;
}

export class ExperiencePageObject {
	constructor() {
		renderWithProviders(<Experience />);
	}

	get sectionTitle(): string | null {
		return screen.getByRole('heading', { level: 2 }).textContent;
	}

	get entries(): ExperienceEntryText[] {
		return screen.getAllByRole('listitem').map((li) => ({
			company: li.querySelector('h3')?.textContent ?? '',
			role: li.querySelector('p')?.textContent ?? '',
			dateRange: li.querySelector('.MuiTimelineOppositeContent-root')?.textContent ?? '',
		}));
	}
}
