import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ContactMeForm } from '../../ContactMeForm'
import { renderWithProviders } from '../render'

export class ContactMeFormPageObject {
	private user = userEvent.setup()

	constructor() {
		renderWithProviders(<ContactMeForm />)
	}

	// Required fields render their label with a trailing "*", so matching by
	// prefix avoids depending on MUI's exact asterisk markup/whitespace.
	async fillName(value: string) {
		await this.user.type(screen.getByLabelText(/^Name/), value)
	}

	async fillEmail(value: string) {
		await this.user.type(screen.getByLabelText(/^Email address/), value)
	}

	async fillSubject(value: string) {
		await this.user.type(screen.getByLabelText('Subject'), value)
	}

	async fillMessage(value: string) {
		await this.user.type(screen.getByLabelText(/^Message/), value)
	}

	async submit() {
		await this.user.click(screen.getByRole('button', { name: 'Send message' }))
	}

	get isDialogVisible(): boolean {
		return screen.queryByRole('dialog') !== null
	}

	// The confirmation dialog opens after the mocked `emailjs.send()` promise
	// resolves, one microtask after `submit()`'s click settles — poll for it
	// rather than reading `isDialogVisible` synchronously right after submit.
	async waitForDialog() {
		const dialog = await screen.findByRole('dialog')
		return dialog.querySelector('#dialog-title')?.textContent ?? null
	}
}
