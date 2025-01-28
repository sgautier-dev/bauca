import Image from "next/image"
import logo from "@/images/logo-nobg.png"
import heroImg from "@/images/hero.jpg"
import Link from "next/link"
export default function Hero() {
	return (
		<div className="relative">
			<div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
				<div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-48 lg:pt-40 xl:col-span-6">
					<div className="mx-auto max-w-lg lg:mx-0">
						<Image
							alt="Baüca, bar à tisane et gourmandises au miel"
							src={logo}
							className="h-32 w-auto"
						/>
						{/* <div className="hidden sm:mt-32 sm:flex lg:mt-16">
							<div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
								Anim aute id magna aliqua ad ad non deserunt sunt.{" "}
								<a
									href="#"
									className="whitespace-nowrap font-semibold text-green-700"
								>
									<span aria-hidden="true" className="absolute inset-0" />
									Read more <span aria-hidden="true">&rarr;</span>
								</a>
							</div>
						</div> */}
						<h1 className="mt-24 text-pretty text-5xl font-semibold tracking-tight sm:mt-10 sm:text-7xl">
							Savourez l&apos;authenticité de Baüca
						</h1>
						<p className="mt-8 text-pretty text-lg font-medium sm:text-xl/8">
							Tisanes bio, jus frais, smoothies, et gourmandises au miel.
							Découvrez des saveurs authentiques, fabriquées à partir de
							produits locaux et bio, directement sur les marchés de Montpellier
							et Nîmes.
						</p>
						<div className="mt-10 flex items-center gap-x-6">
							<Link
								href="#"
								className="rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
							>
								Découvrir mes produits
							</Link>
							<Link href="#" className="text-sm/6 font-semibold">
								Où me trouver ? <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
					<Image
						alt="Baüca, bar à tisane et gourmandises au miel"
						src={heroImg}
						className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
						priority
					/>
				</div>
			</div>
		</div>
	)
}
