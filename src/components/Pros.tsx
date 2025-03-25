import prosImg from "@/images/pros.jpg"
import Image from "next/image"
import Link from "next/link"
export default function Pros() {
	return (
		<div className="py-24 sm:py-32" id="pros">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
					<p className="text-base/7 font-semibold text-lightGreen">
						Pour les professionnels
					</p>
					<h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
						Des gourmandises artisanales sur mesure pour votre établissement
					</h2>
					<div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 lg:max-w-none lg:grid-cols-2">
						<div>
							<p>
								Vous êtes hôtelier, responsable de boutique, d’un espace
								bien-être ou d’une administration ? Offrez à vos clients et
								collaborateurs une touche gourmande, locale et responsable.
							</p>
							<p className="mt-8">
								Je vous propose une sélection de gâteaux de voyage bio,
								confectionnés avec des ingrédients locaux et sucrés
								naturellement au miel. Idéals pour un accueil en chambre
								raffiné, un petit-déjeuner sain ou une pause gourmande en
								entreprise.
							</p>
						</div>
						<div>
							<p>👉 Un service sur mesure :</p>
							<ul className="mt-4 space-y-2 list-disc list-inside">
								<li>Formats adaptés à vos besoins</li>
								<li>Emballages personnalisés</li>
								<li>Options sans gluten, sans lactose ou véganes</li>
							</ul>

							<p className="mt-8">
								✨ Faites le choix de l’authenticité et de la qualité
								artisanale, et valorisez une alimentation plus saine, plus
								locale, et plus respectueuse.
							</p>
						</div>
					</div>
					<div className="mt-10 flex">
						<Link
							href="#contact"
							className="rounded-md bg-lightGreen px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-lightGreen/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lightGreen"
						>
							Besoin d&apos;un devis ?
						</Link>
					</div>
				</div>
			</div>
			<div className="relative pt-16 lg:pt-20">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<Image
						alt="Baüca, bar à tisane et gourmandises au miel"
						src={prosImg}
						className="rounded-xl ring-1 shadow-2xl ring-gray-900/10"
					/>
					<div aria-hidden="true" className="relative">
						<div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
					</div>
				</div>
			</div>
		</div>
	)
}
