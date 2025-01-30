import Hero from "@/components/Hero"
import Products from "@/components/Products"
import ProductsCTA from "@/components/ProductsCTA"
import Story from "@/components/Story"
import Location from "@/components/Location"
import Contact from "@/components/Contact"

export default function Home() {
	return (
		<main className="flex flex-col justify-center mx-auto">
			<Hero />
			<Story />
			<Products />
			<ProductsCTA />
			<Location />
			<Contact />
		</main>
	)
}
