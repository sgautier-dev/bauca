import Image from "next/image"
import { MapPin, Clock } from "lucide-react"
import locationImg from "@/images/location.jpg"

const markets = [
	{
		name: "Marché des Arceaux – Montpellier",
		day: "Les mardis matin ",
		hours: "de 8h à 13h",
	},
	{
		name: "Marché de la Halle Tropisme",
		day: "Les jeudis soir ",
		hours: "de 17h à 20h",
	},
	{
		name: "Marché de Castelnau-le-Lez",
		day: "Les samedis matin ",
		hours: "de 8h à 13h",
	},
	{
		name: "Marché de La Grande Motte",
		day: "Les dimanches matin ",
		hours: "de 8h à 13h",
	},
]

export default function Location() {
	return (
		<div className="overflow-hidden py-24 sm:py-32" id="location">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					{/* Texte & Liste des emplacements */}
					<div className="lg:ml-auto lg:pl-4 lg:pt-4">
						<div className="lg:max-w-lg">
							<h2 className="text-base font-semibold text-lightGreen">
								Retrouvez-moi sur les marchés
							</h2>
							<p className="mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
								Où me rencontrer ?
							</p>
							<p className="mt-6 text-lg">
								Venez déguster mes gourmandises au miel, mes tisanes et jus
								frais sur les marchés de Montpellier et des alentours.
							</p>

							{/* Liste des marchés */}
							<dl className="mt-10 max-w-xl space-y-8 text-base lg:max-w-none">
								{markets.map((market) => (
									<div key={market.name} className="relative pl-9">
										{/* Icône de localisation */}
										<dt className="font-semibold flex items-center gap-2">
											<MapPin
												aria-hidden="true"
												className="absolute left-1 top-1 size-5 text-green-700"
											/>
											{market.name}
										</dt>
										<dd className="flex items-center gap-2">
											<Clock
												aria-hidden="true"
												className="size-5 text-gray-500"
											/>
											{market.day} - {market.hours}
										</dd>
									</div>
								))}
							</dl>
							<p className="mt-6 text-lg">
								Pour suivre l’actualité de mon stand, rendez-vous sur{" "}
								<a
									href="https://www.instagram.com/bauca_terracoopa"
									target="_blank"
									rel="noopener noreferrer"
									className="text-darkGreen font-semibold hover:underline"
								>
									Instagram
								</a>. Vous pourrez me suivre sur les événements que je réalise dans
								l’année. Au plaisir de vous rencontrer !
							</p>
						</div>
					</div>

					{/* Image de présentation */}
					<div className="flex items-start justify-end lg:order-first">
						<Image
							alt="Baüca, bar à tisane et gourmandises au miel"
							src={locationImg}
							className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
