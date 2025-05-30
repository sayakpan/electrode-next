import { Hero } from "@/components/homepage/Hero"
import { FeaturedGames } from "@/components/homepage/FeaturedGames"
import { GameCategories } from "@/components/homepage/GameCategories"
import { Stats } from "@/components/homepage/Stats"
import { CTA } from "@/components/homepage/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedGames />
      <GameCategories />
      <Stats />
      <CTA />
    </>
  )
}