import Image from "next/image"
import productsBg from "@/images/products-bg.jpg"
import { Leaf, GlassWater, Cookie } from "lucide-react";
import Link from "next/link"

const cards = [
	{
		name: "Tisanes et Thés",
		description:
			"Une sélection de plantes et de thés bio, cueillis localement et proposés en vrac ou en sachets. Des infusions naturelles à savourer sur place ou à emporter.",
		icon: Leaf,
	},
	{
		name: "Jus et Smoothies",
		description:
			"Des boissons fraîches et vitaminées, préparées avec des fruits et légumes de saison. Une approche zéro-gaspi qui valorise les produits imparfaits mais pleins de goût.",
		icon: GlassWater,
	},
	{
		name: "Pâtisseries au Miel",
		description:
			"Des madeleines, financiers, nougats et autres douceurs, confectionnés avec du miel local pour une touche sucrée naturelle et savoureuse.",
		icon: Cookie,
	},
]
export default function ProductsCTA() {
	return (
		<div className="relative isolate overflow-hidden py-24 sm:py-32">
			<Image
				alt="Baüca, bar à tisane et gourmandises au miel"
				src={productsBg}
				className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
			/>
			{/* Overlay */}
			<div className="absolute inset-0 bg-softBeige/70"></div>

			<div className=" relative mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">
						Ce que je propose
					</h2>
					<p className="mt-8 text-pretty text-lg font-medium sm:text-xl/8">
						Venez découvrir mes tisanes, jus et gourmandises directement sur les
						marchés de Montpellier et Nîmes. À très bientôt !
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
					{cards.map((card) => (
						<div
							key={card.name}
							className="flex gap-x-4 rounded-xl bg-softBeige/80 p-6 ring-1 ring-inset ring-white/10"
						>
							<card.icon
								aria-hidden="true"
								className="h-7 w-5 flex-none text-lightGreen"
							/>
							<div className="text-base/7">
								<h3 className="font-semibold">{card.name}</h3>
								<p className="mt-2">{card.description}</p>
							</div>
						</div>
					))}
				</div>
				<div className="mt-16 flex items-center justify-end gap-x-6">
					<Link
						href="#location"
						className="rounded-md bg-lightGreen px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-lightGreen/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lightGreen"
					>
						Où me trouver ?
					</Link>
					<Link href="#contact" className="text-sm/6 font-semibold">
						Me contacter{" "}
						<span aria-hidden="true" className="animate-pulse">
							🌿
						</span>
					</Link>
				</div>
			</div>
		</div>
	)
}
