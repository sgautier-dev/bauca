"use client"

import { Phone } from "lucide-react"
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
import { useAction } from "next-safe-action/hooks"
import sendEmail from "@/actions/sendEmail"
import { Loader2 } from "lucide-react"
import { DisplayServerActionResponse } from "./DisplayServerActionResponse"

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

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		execute(formData)
	}

	useEffect(() => {
		if (!isExecuting && result.data?.message) {
			if (formRef.current) {
				formRef.current.reset() // Reset form if success
			}
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				message: "",
			})
		}
	}, [isExecuting, result])

	return (
		<div className="relative isolate" id="contact">
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
					ref={formRef}
					onSubmit={handleSubmit}
					className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
				>
					<div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							<div>
								<label
									htmlFor="firstName"
									className="block text-sm/6 font-semibold"
								>
									Prénom
								</label>
								<div className="mt-2.5">
									<input
										id="firstName"
										name="firstName"
										type="text"
										autoComplete="given-name"
										value={formData.firstName}
										onChange={handleChange}
										className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lightGreen"
										required
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="lastName"
									className="block text-sm/6 font-semibold"
								>
									Nom
								</label>
								<div className="mt-2.5">
									<input
										id="lastName"
										name="lastName"
										type="text"
										autoComplete="family-name"
										value={formData.lastName}
										onChange={handleChange}
										className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lightGreen"
										required
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
										value={formData.email}
										onChange={handleChange}
										className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lightGreen"
										required
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<div className="flex justify-between text-sm/6">
									<label htmlFor="phone" className="block font-semibold ">
										Tél
									</label>
									<p id="phone-description" className="text-gray-400">
										Optionnel
									</p>
								</div>
								<div className="mt-2.5">
									<input
										id="phone"
										name="phone"
										type="tel"
										autoComplete="tel"
										value={formData.phone}
										onChange={handleChange}
										className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lightGreen"
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
										value={formData.message}
										onChange={handleChange}
										className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lightGreen"
										required
									/>
								</div>
							</div>
						</div>
						<div className="mt-8 flex justify-end">
							<button
								type="submit"
								className="rounded-md bg-lightGreen px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-lightGreen/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lightGreen"
							>
								{isExecuting ? (
									<Loader2 className="h-5 w-5 animate-spin" />
								) : (
									"Envoyer"
								)}
							</button>
						</div>
					</div>
					<DisplayServerActionResponse result={result} />
				</form>
			</div>
		</div>
	)
}
