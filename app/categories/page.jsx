'use client'

import { Gamepad2, Trophy, Users, Clock, Star, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const categories = [
    {
        id: 1,
        name: "Action Games",
        description: "Fast-paced games with intense gameplay and exciting challenges",
        icon: Zap,
        gameCount: 45,
        color: "from-red-500 to-orange-500"
    },
    {
        id: 2,
        name: "Racing Games",
        description: "High-speed racing games with stunning graphics and realistic physics",
        icon: Gamepad2,
        gameCount: 28,
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: 3,
        name: "Puzzle Games",
        description: "Brain-teasing puzzles and challenges to test your problem-solving skills",
        icon: Star,
        gameCount: 36,
        color: "from-purple-500 to-pink-500"
    },
    {
        id: 4,
        name: "RPG Games",
        description: "Immersive role-playing games with rich stories and character development",
        icon: Users,
        gameCount: 32,
        color: "from-green-500 to-emerald-500"
    },
    {
        id: 5,
        name: "Strategy Games",
        description: "Tactical games that require planning and strategic thinking",
        icon: Trophy,
        gameCount: 24,
        color: "from-yellow-500 to-amber-500"
    },
    {
        id: 6,
        name: "Casual Games",
        description: "Easy-to-play games perfect for quick entertainment",
        icon: Clock,
        gameCount: 52,
        color: "from-indigo-500 to-violet-500"
    }
]

export default function CategoriesPage() {
    return (
        <div className="min-h-screen bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col space-y-8">
                    {/* Header */}
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Game Categories
                        </h1>
                        <p className="text-gray-400">
                            Explore our diverse collection of games across different categories
                        </p>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="p-6">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                                        <category.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                                    <p className="text-gray-400 mb-4">{category.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-400">
                                            {category.gameCount} games
                                        </span>
                                        <Button 
                                            variant="ghost" 
                                            className="text-white hover:text-white hover:bg-white/10"
                                        >
                                            View Games
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
} 