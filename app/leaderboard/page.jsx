'use client'

import { useState } from 'react'
import { Trophy, Medal, Star, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const leaderboardData = {
    "All Games": [
        { rank: 1, name: "Alex Johnson", points: 9850, games: 45, winRate: "78%" },
        { rank: 2, name: "Sarah Smith", points: 9720, games: 42, winRate: "75%" },
        { rank: 3, name: "Mike Wilson", points: 9650, games: 48, winRate: "72%" },
        { rank: 4, name: "Emma Davis", points: 9520, games: 40, winRate: "70%" },
        { rank: 5, name: "John Brown", points: 9450, games: 38, winRate: "68%" },
    ],
    "Action": [
        { rank: 1, name: "Mike Wilson", points: 9850, games: 45, winRate: "78%" },
        { rank: 2, name: "Alex Johnson", points: 9720, games: 42, winRate: "75%" },
        { rank: 3, name: "Sarah Smith", points: 9650, games: 48, winRate: "72%" },
        { rank: 4, name: "John Brown", points: 9520, games: 40, winRate: "70%" },
        { rank: 5, name: "Emma Davis", points: 9450, games: 38, winRate: "68%" },
    ],
    "Racing": [
        { rank: 1, name: "Sarah Smith", points: 9850, games: 45, winRate: "78%" },
        { rank: 2, name: "Emma Davis", points: 9720, games: 42, winRate: "75%" },
        { rank: 3, name: "Mike Wilson", points: 9650, games: 48, winRate: "72%" },
        { rank: 4, name: "Alex Johnson", points: 9520, games: 40, winRate: "70%" },
        { rank: 5, name: "John Brown", points: 9450, games: 38, winRate: "68%" },
    ],
    "Puzzle": [
        { rank: 1, name: "Emma Davis", points: 9850, games: 45, winRate: "78%" },
        { rank: 2, name: "John Brown", points: 9720, games: 42, winRate: "75%" },
        { rank: 3, name: "Sarah Smith", points: 9650, games: 48, winRate: "72%" },
        { rank: 4, name: "Mike Wilson", points: 9520, games: 40, winRate: "70%" },
        { rank: 5, name: "Alex Johnson", points: 9450, games: 38, winRate: "68%" },
    ]
}

export default function LeaderboardPage() {
    const [activeTab, setActiveTab] = useState("All Games")

    const getRankColor = (rank) => {
        switch (rank) {
            case 1: return "text-yellow-400"
            case 2: return "text-gray-300"
            case 3: return "text-amber-600"
            default: return "text-gray-400"
        }
    }

    const getRankIcon = (rank) => {
        switch (rank) {
            case 1: return <Trophy className="w-5 h-5" />
            case 2: return <Medal className="w-5 h-5" />
            case 3: return <Star className="w-5 h-5" />
            default: return null
        }
    }

    return (
        <div className="min-h-screen bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col space-y-8">
                    {/* Header */}
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Leaderboard
                        </h1>
                        <p className="text-gray-400">
                            Top players across different game categories
                        </p>
                    </div>

                    {/* Tabs */}
                    <Tabs defaultValue="All Games" className="w-full">
                        <TabsList className="bg-white/5 border border-white/10">
                            {Object.keys(leaderboardData).map((category) => (
                                <TabsTrigger
                                    key={category}
                                    value={category}
                                    className="data-[state=active]:bg-white/10 text-white"
                                >
                                    {category}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {Object.entries(leaderboardData).map(([category, players]) => (
                            <TabsContent key={category} value={category}>
                                <div className="mt-6">
                                    <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                                        <div className="grid grid-cols-5 gap-4 p-4 text-sm font-medium text-gray-400 border-b border-white/10">
                                            <div>Rank</div>
                                            <div>Player</div>
                                            <div>Points</div>
                                            <div>Games</div>
                                            <div>Win Rate</div>
                                        </div>
                                        {players.map((player) => (
                                            <div
                                                key={player.rank}
                                                className="grid grid-cols-5 gap-4 p-4 items-center hover:bg-white/5 transition-colors"
                                            >
                                                <div className={`flex items-center space-x-2 ${getRankColor(player.rank)}`}>
                                                    {getRankIcon(player.rank)}
                                                    <span>#{player.rank}</span>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <Avatar className="h-8 w-8">
                                                        <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600">
                                                            {player.name.charAt(0)}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <span>{player.name}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <TrendingUp className="w-4 h-4 text-green-400" />
                                                    <span>{player.points.toLocaleString()}</span>
                                                </div>
                                                <div>{player.games}</div>
                                                <div>{player.winRate}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>
        </div>
    )
} 