import { screen } from '@testing-library/react'

import { AboutMe } from '../../AboutMe'
import { renderWithProviders } from '../render'

export class AboutMePageObject {
	constructor() {
		renderWithProviders(<AboutMe />)
	}

	get sectionTitle(): string | null {
		return screen.getByRole('heading', { level: 2 }).textContent
	}
}
