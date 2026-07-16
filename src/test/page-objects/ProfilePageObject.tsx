import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Profile } from '../../Profile'
import { renderWithProviders } from '../render'

export class ProfilePageObject {
	private user = userEvent.setup()

	constructor() {
		renderWithProviders(<Profile />)
	}

	get name(): string | null {
		return screen.getByRole('heading', { level: 1 }).textContent
	}

	get githubHref(): string | null {
		return screen.getByRole('link', { name: 'GitHub' }).getAttribute('href')
	}

	get linkedInHref(): string | null {
		return screen.getByRole('link', { name: 'LinkedIn' }).getAttribute('href')
	}

	async clickContactMe() {
		await this.user.click(screen.getByRole('button', { name: 'Contact me' }))
	}
}
