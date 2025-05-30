'use client'

import { Button } from "@/components/ui/button"
import { Zap, LogOut, User } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { AuthModal } from "@/components/auth/AuthModal"
import { useAuth } from "@/hooks/useAuth"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

export function Navbar() {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
    const [authModalTab, setAuthModalTab] = useState("login")
    const { user, profile, isAuthenticated, logout } = useAuth()

    const openAuthModal = (tab) => {
        setAuthModalTab(tab)
        setIsAuthModalOpen(true)
    }

    const handleLogout = async () => {
        await logout()
    }

    return (
        <>
            <nav className="border-b border-white/10 backdrop-blur-md bg-black/20 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <Link href="/" className="flex items-center space-x-2">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                                    <Image 
                                        src="/images/logo.png"
                                        alt="Electrode Games Logo"
                                        width={32}
                                        height={32}
                                        className="h-8 w-8"
                                    />
                                </div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    Electrode Games
                                </span>
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/games" className="text-gray-300 hover:text-white transition-colors">
                                Games
                            </Link>
                            <Link href="/categories" className="text-gray-300 hover:text-white transition-colors">
                                Categories
                            </Link>
                            <Link href="/leaderboard" className="text-gray-300 hover:text-white transition-colors">
                                Leaderboard
                            </Link>
                            <Link href="/community" className="text-gray-300 hover:text-white transition-colors">
                                Community
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            {isAuthenticated ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src={profile?.image} alt={profile?.name} />
                                                <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600">
                                                    {profile?.name?.charAt(0) || user?.first_name?.charAt(0) || 'U'}
                                                </AvatarFallback>
                                            </Avatar>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56 bg-slate-900 border-white/10" align="end">
                                        <DropdownMenuLabel className="text-white">
                                            <div className="flex flex-col space-y-1">
                                                <p className="text-sm font-medium leading-none">{profile?.name || user?.first_name}</p>
                                                <p className="text-xs leading-none text-gray-400">{user?.email}</p>
                                            </div>
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator className="bg-white/10" />
                                        <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-white/10 cursor-pointer">
                                            <Link href="/profile" className="flex items-center w-full">
                                                <User className="mr-2 h-4 w-4" />
                                                <span>Profile</span>
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem 
                                            className="text-red-400 hover:text-red-300 hover:bg-white/10 cursor-pointer"
                                            onClick={handleLogout}
                                        >
                                            <LogOut className="mr-2 h-4 w-4" />
                                            <span>Log out</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <>
                                    <Button 
                                        variant="ghost" 
                                        className="text-white hover:bg-white/10 hover:text-white"
                                        onClick={() => openAuthModal("login")}
                                    >
                                        Sign In
                                    </Button>
                                    <Button 
                                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                                        onClick={() => openAuthModal("register")}
                                    >
                                        Sign Up
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <AuthModal 
                isOpen={isAuthModalOpen} 
                onClose={() => setIsAuthModalOpen(false)}
                defaultTab={authModalTab}
            />
        </>
    )
}
