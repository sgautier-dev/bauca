import Image from "next/image"
import productsBg from "@/images/products-bg.jpg"
import { Leaf, GlassWater, Cookie } from "lucide-react"
import Link from "next/link"

const cards = [
	{
		name: "Gâteaux de voyage",
		description:
			"Des madeleines, des barres de céréales, des tartelettes caramiel, des macarons, des gâteaux sans gluten* et sans lactose* variés, confectionnés avec du miel de Sainfoin, de montagne et des causses, pour une touche sucrée naturelle et savoureuse. (* Ne convient pas aux personnes allergiques car l’atelier utilise de la farine et des produits laitiers.)",
		icon: Cookie,
	},
	{
		name: "Tisanes",
		description:
			"Une sélection de plantes bio cultivées ou cueillies localement, dont les mélanges sont réalisés par mes soins selon des recettes originales. Les plantes sont proposées en vrac ou en sachets, à savourer sur place ou à emporter.",
		icon: Leaf,
	},
	{
		name: "Jus frais et smoothies ",
		description:
			"Des boissons fraiches et vitaminées, saines et naturelles, préparées avec des fruits et légumes bio et de saison. Je propose des recettes gourmandes et très variées avec une approche santé et bien-être.",
		icon: GlassWater,
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
						Ma gamme de produits
					</h2>
					<p className="mt-8 text-pretty text-lg font-medium sm:text-xl/8">
						Venez découvrir mes tisanes, jus et gourmandises directement sur les
						marchés de Montpellier et alentours. À très bientôt !
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
