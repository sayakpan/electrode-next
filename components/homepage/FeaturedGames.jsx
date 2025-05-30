import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Star, Users } from "lucide-react"
import Image from "next/image"


export function FeaturedGames() {
    const featuredGames = [
        {
            id: 1,
            title: "Neon Runner",
            category: "Action",
            rating: 4.8,
            players: "12.5K",
            image: "/placeholder.svg?height=200&width=300",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            id: 2,
            title: "Cyber Puzzle",
            category: "Puzzle",
            rating: 4.9,
            players: "8.2K",
            image: "/placeholder.svg?height=200&width=300",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            id: 3,
            title: "Space Drift",
            category: "Racing",
            rating: 4.7,
            players: "15.1K",
            image: "/placeholder.svg?height=200&width=300",
            gradient: "from-green-500 to-emerald-500",
        },
    ]

    return (
        <section id="featured-games" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Featured Games</h2>
                    <p className="text-gray-400 text-lg">Discover the most popular games on our platform</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {featuredGames.map((game) => (
                        <Card
                            key={game.id}
                            className="bg-white/5 backdrop-blur-md border-white/10 overflow-hidden group hover:scale-105 transition-all duration-300"
                        >
                            <div className="relative">
                                <Image
                                    src={game.image || "/placeholder.svg"}
                                    alt={game.title}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${game.gradient} opacity-60`} />
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-black/50 text-white border-0">{game.category}</Badge>
                                </div>
                                <Button
                                    size="sm"
                                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-md hover:bg-white/30 border-0"
                                >
                                    <Play className="w-4 h-4" />
                                </Button>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                                <div className="flex items-center justify-between text-sm text-gray-400">
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span>{game.rating}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Users className="w-4 h-4" />
                                        <span>{game.players} players</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
