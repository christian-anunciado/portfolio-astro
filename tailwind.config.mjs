import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
				sans: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
				heading: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
				pixel: ['"Press Start 2P"', 'cursive'],
			},
			colors: {
				bg: 'var(--color-bg)',
				'bg-subtle': 'var(--color-bg-subtle)',
				surface: 'var(--color-surface)',
				border: 'var(--color-border)',
				'text-primary': 'var(--color-text-primary)',
				'text-secondary': 'var(--color-text-secondary)',
				'text-tertiary': 'var(--color-text-tertiary)',
				accent: 'var(--color-accent)',
				'accent-hover': 'var(--color-accent-hover)',
			},
			borderColor: {
				DEFAULT: 'var(--color-border)',
			},
			typography: ({ theme }) => ({
				default: {
					css: {
						'--tw-prose-body': 'var(--color-text-secondary)',
						'--tw-prose-bold': 'var(--color-text-primary)',
						'--tw-prose-invert-body': 'var(--color-text-secondary)',
						'--tw-prose-invert-bold': 'var(--color-text-primary)',
					},
				},
			})
		}
	},
	plugins: [require('@tailwindcss/typography')],
}
