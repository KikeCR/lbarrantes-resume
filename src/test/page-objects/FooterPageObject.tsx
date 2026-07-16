import { screen } from '@testing-library/react'

import { Footer } from '../../Footer'
import { renderWithProviders } from '../render'

export class FooterPageObject {
	constructor() {
		renderWithProviders(<Footer />)
	}

	get copyrightText(): string | null {
		return screen.getByText(/Luis Barrantes/).textContent
	}

	get githubLink(): HTMLAnchorElement {
		return screen.getByRole('link', { name: 'GitHub' }) as HTMLAnchorElement
	}

	get linkedInLink(): HTMLAnchorElement {
		return screen.getByRole('link', { name: 'LinkedIn' }) as HTMLAnchorElement
	}

	get downloadResumeButton(): HTMLElement {
		return screen.getByRole('button', { name: /download resume/i })
	}
}
