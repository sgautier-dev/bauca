import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

import "./globals.css"

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-montserrat",
	weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
	title: {
		template: "%s - Baüca, Bar à Tisanes Bio & Gourmandises | Marchés Montpellier et Nimes",
		default: "Baüca, Bar à Tisanes Bio & Gourmandises | Marchés Montpellier et Nimes",
	},
	description:
		"Découvrez Baüca, bar ambulant de tisanes bio, jus frais et gourmandises au miel. Retrouvez-moi sur les marchés de Montpellier et Nimes !",
	authors: [{ name: "Sébastien Gautier", url: "https://www.sgautier.dev" }],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="fr" className="scroll-smooth">
			<body
				className={`${montserrat.variable} antialiased mx-auto w-full max-w-screen-2xl font-montserrat`}
			>
				{children}
			</body>
		</html>
	)
}
