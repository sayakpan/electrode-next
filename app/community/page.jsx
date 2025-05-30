'use client'

import { useState } from 'react'
import { MessageSquare, ThumbsUp, Share2, MoreHorizontal, Users, Trophy, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from '@/components/ui/input'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const posts = [
    {
        id: 1,
        author: {
            name: "Alex Johnson",
            avatar: null,
            role: "Pro Gamer"
        },
        content: "Just achieved a new high score in Cyber Racer! 🏎️ Who wants to challenge me?",
        timestamp: "2 hours ago",
        likes: 45,
        comments: 12,
        shares: 5
    },
    {
        id: 2,
        author: {
            name: "Sarah Smith",
            avatar: null,
            role: "Game Developer"
        },
        content: "Check out my latest strategy guide for Space Warriors. I've included some advanced techniques that will help you dominate the leaderboard! 🚀",
        timestamp: "5 hours ago",
        likes: 78,
        comments: 23,
        shares: 15
    },
    {
        id: 3,
        author: {
            name: "Mike Wilson",
            avatar: null,
            role: "Community Manager"
        },
        content: "We're hosting a community tournament this weekend! Sign up now for a chance to win exclusive rewards. 🏆",
        timestamp: "1 day ago",
        likes: 120,
        comments: 45,
        shares: 30
    }
]

const events = [
    {
        id: 1,
        title: "Weekend Tournament",
        date: "June 15-16",
        participants: 128,
        prize: "Exclusive Game Bundle"
    },
    {
        id: 2,
        title: "Community Meetup",
        date: "June 20",
        participants: 45,
        prize: "Gaming Merchandise"
    },
    {
        id: 3,
        title: "Speedrun Challenge",
        date: "June 25",
        participants: 89,
        prize: "Special Badge"
    }
]

export default function CommunityPage() {
    const [activeTab, setActiveTab] = useState("feed")

    return (
        <div className="min-h-screen bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col space-y-8">
                    {/* Header */}
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Community
                        </h1>
                        <p className="text-gray-400">
                            Connect with fellow gamers and stay updated with the latest news
                        </p>
                    </div>

                    {/* Tabs */}
                    <Tabs defaultValue="feed" className="w-full">
                        <TabsList className="bg-white/5 border border-white/10">
                            <TabsTrigger value="feed" className="data-[state=active]:bg-white/10 text-white">
                                Feed
                            </TabsTrigger>
                            <TabsTrigger value="events" className="data-[state=active]:bg-white/10 text-white">
                                Events
                            </TabsTrigger>
                            <TabsTrigger value="discussions" className="data-[state=active]:bg-white/10 text-white">
                                Discussions
                            </TabsTrigger>
                        </TabsList>

                        {/* Feed Tab */}
                        <TabsContent value="feed">
                            <div className="mt-6 space-y-6">
                                {/* Create Post */}
                                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                    <div className="flex space-x-4">
                                        <Avatar className="h-10 w-10">
                                            <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600">
                                                U
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <Input
                                                placeholder="Share your thoughts..."
                                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Posts */}
                                {posts.map((post) => (
                                    <div key={post.id} className="bg-white/5 border border-white/10 rounded-lg p-6">
                                        <div className="flex justify-between items-start">
                                            <div className="flex space-x-4">
                                                <Avatar className="h-10 w-10">
                                                    <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600">
                                                        {post.author.name.charAt(0)}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="flex items-center space-x-2">
                                                        <span className="font-semibold">{post.author.name}</span>
                                                        <span className="text-sm text-gray-400">{post.author.role}</span>
                                                    </div>
                                                    <span className="text-sm text-gray-400">{post.timestamp}</span>
                                                </div>
                                            </div>
                                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                                                <MoreHorizontal className="h-5 w-5" />
                                            </Button>
                                        </div>
                                        <p className="mt-4 text-gray-300">{post.content}</p>
                                        <div className="mt-4 flex items-center space-x-6 text-gray-400">
                                            <Button variant="ghost" size="sm" className="hover:text-white">
                                                <ThumbsUp className="h-4 w-4 mr-2" />
                                                {post.likes}
                                            </Button>
                                            <Button variant="ghost" size="sm" className="hover:text-white">
                                                <MessageSquare className="h-4 w-4 mr-2" />
                                                {post.comments}
                                            </Button>
                                            <Button variant="ghost" size="sm" className="hover:text-white">
                                                <Share2 className="h-4 w-4 mr-2" />
                                                {post.shares}
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Events Tab */}
                        <TabsContent value="events">
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {events.map((event) => (
                                    <div key={event.id} className="bg-white/5 border border-white/10 rounded-lg p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-semibold">{event.title}</h3>
                                            <Trophy className="h-6 w-6 text-yellow-400" />
                                        </div>
                                        <div className="space-y-2 text-gray-400">
                                            <div className="flex items-center space-x-2">
                                                <Star className="h-4 w-4" />
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Users className="h-4 w-4" />
                                                <span>{event.participants} participants</span>
                                            </div>
                                            <div className="pt-2">
                                                <span className="text-sm">Prize: {event.prize}</span>
                                            </div>
                                        </div>
                                        <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                                            Join Event
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Discussions Tab */}
                        <TabsContent value="discussions">
                            <div className="mt-6 text-center text-gray-400">
                                <p>Coming soon! Join our community discussions.</p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
} 