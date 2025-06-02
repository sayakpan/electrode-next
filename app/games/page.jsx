'use client'

import { useState } from 'react'
import { Search, Filter, Star, Users, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const games = [
    {
        id: 0,
        title: "Tic Tac Toe",
        image: "/images/tic-tac-toe.png",
        category: "Puzzle",
        rating: 4.9,
        players: 5000,
        playTime: "5-10 min",
        slug: "tic-tac-toe"
    },
    {
        id: 1,
        title: "Cyber Racer",
        image: "https://placehold.co/400x225/1a1a1a/ffffff?text=Cyber+Racer",
        category: "Racing",
        rating: 4.8,
        players: 1250,
        playTime: "15-20 min"
    },
    {
        id: 2,
        title: "Space Warriors",
        image: "https://placehold.co/400x225/1a1a1a/ffffff?text=Space+Warriors",
        category: "Action",
        rating: 4.5,
        players: 980,
        playTime: "20-30 min"
    },
    {
        id: 3,
        title: "Puzzle Master",
        image: "https://placehold.co/400x225/1a1a1a/ffffff?text=Puzzle+Master",
        category: "Puzzle",
        rating: 4.9,
        players: 2100,
        playTime: "10-15 min"
    },
    {
        id: 4,
        title: "Dungeon Crawler",
        image: "https://placehold.co/400x225/1a1a1a/ffffff?text=Dungeon+Crawler",
        category: "RPG",
        rating: 4.7,
        players: 1500,
        playTime: "30-45 min"
    },
    {
        id: 5,
        title: "Battle Royale",
        image: "https://placehold.co/400x225/1a1a1a/ffffff?text=Battle+Royale",
        category: "Action",
        rating: 4.6,
        players: 3200,
        playTime: "25-35 min"
    },
    {
        id: 6,
        title: "Card Masters",
        image: "https://placehold.co/400x225/1a1a1a/ffffff?text=Card+Masters",
        category: "Strategy",
        rating: 4.4,
        players: 850,
        playTime: "15-25 min"
    }
]

export default function GamesPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const router = useRouter()

    const filteredGames = games.filter(game => {
        const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const handlePlayGame = (slug) => {
        router.push(`/games/${slug}`)
    }

    return (
        <div className="min-h-screen bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col space-y-8">
                    {/* Header */}
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Games
                        </h1>
                        <p className="text-gray-400">
                            Discover and play the best games in our collection
                        </p>
                    </div>

                    {/* Search and Filters */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <Input
                                placeholder="Search games..."
                                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger className="w-[180px] bg-white/5 border-white/10">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-900 border-white/10">
                                <SelectItem value="all">All Categories</SelectItem>
                                <SelectItem value="Action">Action</SelectItem>
                                <SelectItem value="Racing">Racing</SelectItem>
                                <SelectItem value="Puzzle">Puzzle</SelectItem>
                                <SelectItem value="RPG">RPG</SelectItem>
                                <SelectItem value="Strategy">Strategy</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Games Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredGames.map((game) => (
                            <div
                                key={game.id}
                                className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={game.image}
                                        alt={game.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                                    <div className="flex items-center justify-between text-sm text-gray-400">
                                        <span className="bg-white/10 px-2 py-1 rounded">{game.category}</span>
                                        <div className="flex items-center space-x-2">
                                            <Star className="w-4 h-4 text-yellow-400" />
                                            <span>{game.rating}</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                                        <div className="flex items-center space-x-2">
                                            <Users className="w-4 h-4" />
                                            <span>{game.players.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Clock className="w-4 h-4" />
                                            <span>{game.playTime}</span>
                                        </div>
                                    </div>
                                    <Button 
                                        className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                                        onClick={() => handlePlayGame(game.slug)}
                                    >
                                        Play Now
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
} 