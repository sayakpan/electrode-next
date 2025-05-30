'use client'

import { useState } from 'react'
import { Trophy, Star, Clock, Users, Gamepad2, Settings, Edit2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useAuth } from '@/hooks/useAuth'

const achievements = [
    {
        id: 1,
        title: "First Victory",
        description: "Win your first game",
        icon: Trophy,
        unlocked: true,
        date: "2024-03-15"
    },
    {
        id: 2,
        title: "Speed Demon",
        description: "Complete a race in under 2 minutes",
        icon: Clock,
        unlocked: true,
        date: "2024-03-16"
    },
    {
        id: 3,
        title: "Social Butterfly",
        description: "Make 10 friends",
        icon: Users,
        unlocked: false,
        date: null
    },
    {
        id: 4,
        title: "Game Master",
        description: "Play 50 different games",
        icon: Gamepad2,
        unlocked: false,
        date: null
    }
]

const gameHistory = [
    {
        id: 1,
        game: "Cyber Racer",
        score: 9850,
        rank: 1,
        date: "2024-03-20"
    },
    {
        id: 2,
        game: "Space Warriors",
        score: 8720,
        rank: 3,
        date: "2024-03-19"
    },
    {
        id: 3,
        game: "Puzzle Master",
        score: 7650,
        rank: 5,
        date: "2024-03-18"
    }
]

export default function ProfilePage() {
    const { user, profile } = useAuth()
    const [activeTab, setActiveTab] = useState("overview")

    const stats = {
        gamesPlayed: 45,
        totalScore: 98500,
        winRate: "78%",
        rank: "Gold"
    }

    return (
        <div className="min-h-screen bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col space-y-8">
                    {/* Profile Header */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                            <div className="relative">
                                <Avatar className="h-32 w-32">
                                    <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-4xl">
                                        {profile?.name?.charAt(0) || user?.first_name?.charAt(0) || 'U'}
                                    </AvatarFallback>
                                </Avatar>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute bottom-0 right-0 bg-white/10 hover:bg-white/20"
                                >
                                    <Edit2 className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h1 className="text-3xl font-bold">
                                            {profile?.name || user?.first_name} {user?.last_name}
                                        </h1>
                                        <p className="text-gray-400">{user?.email}</p>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        className="mt-4 md:mt-0 text-white hover:text-white hover:bg-white/10"
                                    >
                                        <Settings className="h-4 w-4 mr-2" />
                                        Settings
                                    </Button>
                                </div>
                                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="bg-white/5 rounded-lg p-4">
                                        <div className="text-2xl font-bold">{stats.gamesPlayed}</div>
                                        <div className="text-sm text-gray-400">Games Played</div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-4">
                                        <div className="text-2xl font-bold">{stats.totalScore.toLocaleString()}</div>
                                        <div className="text-sm text-gray-400">Total Score</div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-4">
                                        <div className="text-2xl font-bold">{stats.winRate}</div>
                                        <div className="text-sm text-gray-400">Win Rate</div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-4">
                                        <div className="text-2xl font-bold">{stats.rank}</div>
                                        <div className="text-sm text-gray-400">Rank</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="bg-white/5 border border-white/10">
                            <TabsTrigger value="overview" className="data-[state=active]:bg-white/20 text-white">
                                Overview
                            </TabsTrigger>
                            <TabsTrigger value="achievements" className="data-[state=active]:bg-white/20 text-white">
                                Achievements
                            </TabsTrigger>
                            <TabsTrigger value="history" className="data-[state=active]:bg-white/20 text-white">
                                Game History
                            </TabsTrigger>
                        </TabsList>

                        {/* Overview Tab */}
                        <TabsContent value="overview">
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                                    <div className="space-y-4">
                                        {gameHistory.slice(0, 3).map((game) => (
                                            <div key={game.id} className="flex items-center justify-between">
                                                <div>
                                                    <div className="font-medium">{game.game}</div>
                                                    <div className="text-sm text-gray-400">{game.date}</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="font-medium">{game.score.toLocaleString()}</div>
                                                    <div className="text-sm text-gray-400">Rank #{game.rank}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold mb-4">Top Games</h3>
                                    <div className="space-y-4">
                                        {gameHistory.map((game) => (
                                            <div key={game.id} className="flex items-center space-x-4">
                                                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                                                    <Gamepad2 className="h-6 w-6" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-medium">{game.game}</div>
                                                    <div className="text-sm text-gray-400">Score: {game.score.toLocaleString()}</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-sm text-gray-400">Rank</div>
                                                    <div className="font-medium">#{game.rank}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Achievements Tab */}
                        <TabsContent value="achievements">
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {achievements.map((achievement) => (
                                    <div
                                        key={achievement.id}
                                        className={`bg-white/5 border border-white/10 rounded-lg p-6 ${
                                            !achievement.unlocked ? 'opacity-50' : ''
                                        }`}
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                                                achievement.unlocked
                                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                                                    : 'bg-white/10'
                                            }`}>
                                                <achievement.icon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">{achievement.title}</h3>
                                                <p className="text-sm text-gray-400">{achievement.description}</p>
                                                {achievement.unlocked && (
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        Unlocked on {achievement.date}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Game History Tab */}
                        <TabsContent value="history">
                            <div className="mt-6">
                                <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                                    <div className="grid grid-cols-4 gap-4 p-4 text-sm font-medium text-gray-400 border-b border-white/10">
                                        <div>Game</div>
                                        <div>Score</div>
                                        <div>Rank</div>
                                        <div>Date</div>
                                    </div>
                                    {gameHistory.map((game) => (
                                        <div
                                            key={game.id}
                                            className="grid grid-cols-4 gap-4 p-4 items-center hover:bg-white/5 transition-colors"
                                        >
                                            <div className="flex items-center space-x-3">
                                                <Gamepad2 className="h-5 w-5 text-gray-400" />
                                                <span>{game.game}</span>
                                            </div>
                                            <div>{game.score.toLocaleString()}</div>
                                            <div>#{game.rank}</div>
                                            <div className="text-gray-400">{game.date}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
} 