import { screen } from '@testing-library/react'

import { TechLogos } from '../../TechLogos'
import { renderWithProviders } from '../render'

export class TechLogosPageObject {
	constructor() {
		renderWithProviders(<TechLogos />)
	}

	get sectionTitle(): string | null {
		return screen.getByRole('heading', { level: 2 }).textContent
	}

	hasLogo(title: string): boolean {
		return screen.queryByText(title) !== null
	}
}
