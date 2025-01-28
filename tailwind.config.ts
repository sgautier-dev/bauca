import type { Config } from "tailwindcss"

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				lightGreen: "#c4d35e",
				darkGreen: "#1f432d",
				softBeige: "#f7f4e9",
			},
		},
	},
	plugins: [],
} satisfies Config
