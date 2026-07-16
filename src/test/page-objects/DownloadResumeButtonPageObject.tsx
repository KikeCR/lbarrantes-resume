import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { DownloadResumeButton } from '../../components/DownloadResumeButton'
import { renderWithProviders } from '../render'

export class DownloadResumeButtonPageObject {
	private user = userEvent.setup()

	constructor() {
		renderWithProviders(<DownloadResumeButton />)
	}

	get button() {
		return screen.getByRole('button')
	}

	async click() {
		await this.user.click(this.button)
	}
}
