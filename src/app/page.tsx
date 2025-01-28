import Hero from "@/components/Hero"
import Story from "@/components/Story"

export default function Home() {
	return (
		<main className="flex flex-col justify-center mx-auto">
			<Hero />
      <Story />
		</main>
	)
}
