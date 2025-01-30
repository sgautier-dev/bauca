import Image from "next/image"
import products1 from "@/images/products1.jpg"
import products2 from "@/images/products2.jpg"
import products3 from "@/images/products3.jpg"
import products4 from "@/images/products4.jpg"
import products5 from "@/images/products5.jpg"
import symbol from "@/images/symbole-bauca.png"
export default function Products() {
	return (
		<div className="relative isolate" id="products">
			<svg
				aria-hidden="true"
				className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
			>
				<defs>
					<pattern
						x="50%"
						y={-1}
						id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
						width={200}
						height={200}
						patternUnits="userSpaceOnUse"
					>
						<path d="M.5 200V.5H200" fill="none" />
					</pattern>
				</defs>
				<svg x="50%" y={-1} className="overflow-visible fill-gray-50">
					<path
						d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
						strokeWidth={0}
					/>
				</svg>
				<rect
					fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
					width="100%"
					height="100%"
					strokeWidth={0}
				/>
			</svg>
			<div
				aria-hidden="true"
				className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
			>
				<div
					style={{
						clipPath:
							"polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
					}}
					className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#c4d35e] to-[#9089fc] opacity-30"
				/>
			</div>
			<div className="overflow-hidden">
				<div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
					<div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
						<div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
							<Image
								alt="Baüca, bar à tisane et gourmandises au miel"
								src={symbol}
								className="h-28 sm:h-32 w-auto"
							/>
							<h1 className="mt-24  text-pretty text-5xl font-semibold tracking-tight sm:text-7xl">
								À déguster chez Baüca
							</h1>
							<p className="mt-8 text-pretty text-lg font-medium sm:max-w-md sm:text-xl/8 lg:max-w-none">
								Chaque boisson et gourmandise que je prépare est issue d’une
								sélection rigoureuse de produits bio et locaux. Des tisanes aux
								jus frais, en passant par mes pâtisseries au miel, chaque
								recette est conçue avec soin pour révéler des saveurs simples et
								naturelles.
							</p>
						</div>
						<div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
							<div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
								<div className="relative">
									<Image
										alt="Baüca, bar à tisane et gourmandises au miel"
										src={products1}
										className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
							</div>
							<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
								<div className="relative">
									<Image
										alt="Baüca, bar à tisane et gourmandises au miel"
										src={products2}
										className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
								<div className="relative">
									<Image
										alt="Baüca, bar à tisane et gourmandises au miel"
										src={products3}
										className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
							</div>
							<div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
								<div className="relative">
									<Image
										alt="Baüca, bar à tisane et gourmandises au miel"
										src={products4}
										className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
								<div className="relative">
									<Image
										alt="Baüca, bar à tisane et gourmandises au miel"
										src={products5}
										className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
