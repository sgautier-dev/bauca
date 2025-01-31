import Image from "next/image"
import benoitImg from "@/images/benoit.jpg"
import Link from "next/link"
export default function Story() {
	return (
		<div className="relative" id="story">
			<div className="relative isolate overflow-hidden bg-gradient-to-b from-softBeige/20 pt-14">
				<div
					aria-hidden="true"
					className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] shadow-xl shadow-darkGreen/10 ring-1 ring-lightGreen/20 sm:-mr-80 lg:-mr-96"
				/>
				<div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
						<h2 className="max-w-2xl text-balance text-5xl font-semibold tracking-tight sm:text-7xl lg:col-span-2 xl:col-auto">
							L’histoire derrière Baüca
						</h2>
						<div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
							<p className="text-pretty text-lg font-medium sm:text-xl/8">
								Je m’appelle Benoît, et je suis le créateur de Baüca. Ce projet
								est né de ma passion pour les produits simples et authentiques,
								et de mon envie de valoriser les producteurs locaux. Inspiré par
								mes expériences en développement durable et mes rencontres avec
								des artisans, j’ai lancé un bar ambulant pour partager des
								tisanes bio, jus frais et gourmandises au miel. <br /> Baüca, c’est
								plus qu’un stand, c’est une invitation à savourer des moments
								conviviaux et des saveurs locales.
							</p>
							<div className="mt-10 flex items-center gap-x-6">
								<Link
									href="#products"
									className="rounded-md bg-lightGreen px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-lightGreen/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lightGreen"
								>
									Voir mes produits
								</Link>
								<Link href="#contact" className="text-sm/6 font-semibold">
									Me contacter{" "}
									<span aria-hidden="true" className="animate-pulse">
										🌿
									</span>
								</Link>
							</div>
						</div>
						<Image
							alt="Benoît, créateur de Baüca"
							src={benoitImg}
							className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
						/>
					</div>
				</div>
				<div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
			</div>
		</div>
	)
}
