import { screen } from '@testing-library/react'

import { NowSection } from '../../NowSection'
import { renderWithProviders } from '../render'

export class NowSectionPageObject {
	constructor() {
		renderWithProviders(<NowSection />)
	}

	get sectionTitle(): string | null {
		return screen.getByRole('heading', { level: 2 }).textContent
	}

	get body(): string | null {
		return screen.getByRole('paragraph').textContent
	}
}
