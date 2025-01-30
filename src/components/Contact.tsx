import { Phone } from "lucide-react"
import { useRef, useState } from "react"
import { useAction } from "next-safe-action/hooks"

export default function Contact() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	})
    const formRef = useRef<HTMLFormElement>(null)
	const { execute, result, isExecuting } = useAction(sendEmail)
    
	return (
		<div className="relative isolate">
			<div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
				<div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
					<div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
						<div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-softBeige ring-1 ring-gray-900/10 lg:w-1/2">
							<svg
								aria-hidden="true"
								className="absolute inset-0 size-full stroke-lightGreen [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
							>
								<defs>
									<pattern
										x="100%"
										y={-1}
										id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
										width={200}
										height={200}
										patternUnits="userSpaceOnUse"
									>
										<path d="M130 200V.5M.5 .5H200" fill="none" />
									</pattern>
								</defs>
								<rect fill="white" width="100%" height="100%" strokeWidth={0} />
								<svg x="100%" y={-1} className="overflow-visible fill-gray-50">
									<path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
								</svg>
								<rect
									fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
									width="100%"
									height="100%"
									strokeWidth={0}
								/>
							</svg>
						</div>
						<h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
							Un message, une question ?
						</h2>
						<p className="mt-6 text-lg/8">
							Que ce soit pour en savoir plus sur mes produits, me retrouver sur
							un marché, ou passer une commande spéciale, n’hésitez pas à me
							laisser un message ! Je vous répondrai avec plaisir.
						</p>
						<dl className="mt-10 space-y-4 text-base/7">
							<div className="flex gap-x-4">
								<dt className="flex-none">
									<span className="sr-only">Telephone</span>
									<Phone aria-hidden="true" className="h-7 w-6 text-gray-400" />
								</dt>
								<dd>
									<a href="tel:+33660846592" className="hover">
										+33 6 60 84 65 92
									</a>
								</dd>
							</div>
						</dl>
					</div>
				</div>
				<form
					action="#"
					method="POST"
					className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
				>
					<div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							<div>
								<label
									htmlFor="first-name"
									className="block text-sm/6 font-semibold"
								>
									First name
								</label>
								<div className="mt-2.5">
									<input
										id="first-name"
										name="first-name"
										type="text"
										autoComplete="given-name"
										className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="last-name"
									className="block text-sm/6 font-semibold"
								>
									Last name
								</label>
								<div className="mt-2.5">
									<input
										id="last-name"
										name="last-name"
										type="text"
										autoComplete="family-name"
										className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="email"
									className="block text-sm/6 font-semibold"
								>
									Email
								</label>
								<div className="mt-2.5">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="phone-number"
									className="block text-sm/6 font-semibold"
								>
									Phone number
								</label>
								<div className="mt-2.5">
									<input
										id="phone-number"
										name="phone-number"
										type="tel"
										autoComplete="tel"
										className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="message"
									className="block text-sm/6 font-semibold"
								>
									Message
								</label>
								<div className="mt-2.5">
									<textarea
										id="message"
										name="message"
										rows={4}
										className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
										defaultValue={""}
									/>
								</div>
							</div>
						</div>
						<div className="mt-8 flex justify-end">
							<button
								type="submit"
								className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Send message
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
