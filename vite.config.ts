import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	base: '/p84/',
	plugins: [
	react({
		babel: {
		plugins: [['babel-plugin-react-compiler']],
		},
	}),
	tailwindcss(),
	],
})
