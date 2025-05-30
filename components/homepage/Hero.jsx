'use client'

import { Button } from "@/components/ui/button"
import { Play, Sparkles, Users } from "lucide-react"

export function Hero() {
    const scrollToFeaturedGames = () => {
        const featuredGamesSection = document.getElementById('featured-games');
        if (featuredGamesSection) {
            featuredGamesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-gray-300">New games added weekly</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                            Power Up Your
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                            Gaming Experience
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Dive into an electrifying collection of games that will challenge your skills, ignite your passion, and
                        connect you with players worldwide.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4"
                            onClick={scrollToFeaturedGames}
                        >
                            <Play className="w-5 h-5 mr-2" />
                            Start Playing
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/20 bg-transparent text-white hover:bg-white/10 text-lg px-8 py-4"
                        >
                            <Users className="w-5 h-5 mr-2" />
                            Join Community
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
