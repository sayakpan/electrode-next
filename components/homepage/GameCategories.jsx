import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Sparkles, Trophy, GamepadIcon } from "lucide-react"


export function GameCategories() {
    const gameCategories = [
        { name: "Action", count: 45, icon: Zap, color: "from-red-500 to-orange-500" },
        { name: "Puzzle", count: 32, icon: Sparkles, color: "from-purple-500 to-pink-500" },
        { name: "Racing", count: 28, icon: Trophy, color: "from-blue-500 to-cyan-500" },
        { name: "Strategy", count: 21, icon: GamepadIcon, color: "from-green-500 to-emerald-500" },
    ]

    return (
        <section className="py-20 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Game Categories</h2>
                    <p className="text-gray-400 text-lg">Find your perfect game genre</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {gameCategories.map((category) => (
                        <Card
                            key={category.name}
                            className="bg-white/5 backdrop-blur-md border-white/10 group hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            <CardContent className="p-6 text-center">
                                <div
                                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center`}
                                >
                                    <category.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                                <p className="text-gray-400">{category.count} games</p>
                                <ArrowRight className="w-5 h-5 text-gray-400 mx-auto mt-4 group-hover:translate-x-1 transition-transform" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
