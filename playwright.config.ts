import { defineConfig, devices } from '@playwright/test'

import { DEV_SERVER_PORT, DEV_SERVER_URL } from './e2e/constants'

export default defineConfig({
	testDir: './e2e/tests',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: process.env.CI ? 'list' : 'html',
	use: {
		baseURL: DEV_SERVER_URL,
		trace: 'on-first-retry',
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],
	webServer: {
		command: `npm run dev -- --port ${DEV_SERVER_PORT} --strictPort`,
		url: DEV_SERVER_URL,
		reuseExistingServer: !process.env.CI,
	},
})
