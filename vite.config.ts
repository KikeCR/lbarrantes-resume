/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [react(), tailwindcss()],
	base: '/',
	test: {
		environment: 'jsdom',
		setupFiles: './src/test/setup.ts',
		globals: true,
		exclude: [...configDefaults.exclude, 'e2e/**'],
	},
})
