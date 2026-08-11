import { screen } from '@testing-library/react'

import { Portfolio } from '../../Portfolio'
import { renderWithProviders } from '../render'

export class PortfolioPageObject {
	constructor() {
		renderWithProviders(<Portfolio />)
	}

	get sectionTitle(): string | null {
		return screen.getByRole('heading', { level: 2 }).textContent
	}

	hasProjectName(name: string): boolean {
		return screen.queryAllByText(name).length > 0
	}

	hasLiveLink(url: string): boolean {
		return screen
			.getAllByRole('link')
			.some((link) => link.getAttribute('href') === url)
	}
}
