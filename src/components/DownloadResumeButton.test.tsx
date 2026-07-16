import { describe, expect, it, vi } from 'vitest'

import { downloadResume } from '../pdf/downloadResume'
import { DownloadResumeButtonPageObject } from '../test/page-objects/DownloadResumeButtonPageObject'
import { setStoredLanguage } from '../test/render'

vi.mock('../pdf/downloadResume', () => ({
	downloadResume: vi.fn().mockResolvedValue(undefined),
}))

describe('DownloadResumeButton', () => {
	it('generates the resume in the currently selected language when clicked', async () => {
		setStoredLanguage('es')
		const button = new DownloadResumeButtonPageObject()

		await button.click()

		expect(downloadResume).toHaveBeenCalledWith('es')
	})

	it('has an accessible name', () => {
		const button = new DownloadResumeButtonPageObject()

		expect(button.button).toHaveAccessibleName('Download Resume')
	})
})
