'use client'

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { fetchApi } from "@/lib/api"
import Cookies from 'universal-cookie'
import { Eye, EyeOff, Gamepad2, Lock, Mail, User } from "lucide-react"

const cookies = new Cookies()

export function AuthModal({ isOpen, onClose, defaultTab = "login" }) {
    const [activeTab, setActiveTab] = useState(defaultTab)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    // Login form state
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [showLoginPassword, setShowLoginPassword] = useState(false)

    // Register form state
    const [registerName, setRegisterName] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showRegisterPassword, setShowRegisterPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetchApi('api/accounts/login/', {
                method: 'POST',
                body: JSON.stringify({
                    email: loginEmail,
                    password: loginPassword,
                }),
            })

            // Save token and user data in cookies
            cookies.set('token', response.token, { path: '/' })
            cookies.set('user', response.user, { path: '/' })
            cookies.set('profile', response.profile, { path: '/' })

            onClose()
            window.location.reload()
        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        if (registerPassword !== confirmPassword) {
            setError("Passwords do not match")
            setIsLoading(false)
            return
        }

        try {
            const response = await fetchApi('api/accounts/register/', {
                method: 'POST',
                body: JSON.stringify({
                    first_name: registerName,
                    email: registerEmail,
                    password: registerPassword,
                }),
            })

            // Save token and user data in cookies
            cookies.set('token', response.token, { path: '/' })
            cookies.set('user', response.user, { path: '/' })
            cookies.set('profile', response.profile, { path: '/' })

            onClose()
        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] bg-gradient-to-b from-slate-900 to-slate-800 border border-white/10">
                <DialogHeader className="space-y-4">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                            <Gamepad2 className="w-6 h-6 text-white" />
                        </div>
                    </div>
                    <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                        Welcome to Electrode Games
                    </DialogTitle>
                </DialogHeader>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-white/5 p-1 rounded-lg">
                        <TabsTrigger 
                            value="login"
                            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 text-white rounded-md"
                        >
                            Login
                        </TabsTrigger>
                        <TabsTrigger 
                            value="register"
                            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 text-white rounded-md"
                        >
                            Register
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="login" className="mt-6">
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="login-email" className="text-gray-300">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input
                                        id="login-email"
                                        type="email"
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                        required
                                        className="pl-10 bg-white/5 border-white/10 focus:border-purple-500 text-white placeholder:text-gray-400"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="login-password" className="text-gray-300">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input
                                        id="login-password"
                                        type={showLoginPassword ? "text" : "password"}
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                        required
                                        className="pl-10 bg-white/5 border-white/10 focus:border-purple-500 text-white placeholder:text-gray-400"
                                        placeholder="Enter your password"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-white/10 hover:text-white"
                                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                                    >
                                        {showLoginPassword ? (
                                            <EyeOff className="w-4 h-4 text-gray-400" />
                                        ) : (
                                            <Eye className="w-4 h-4 text-gray-400" />
                                        )}
                                    </Button>
                                </div>
                            </div>
                            {error && <p className="text-sm text-red-500">{error}</p>}
                            <Button 
                                type="submit" 
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                                disabled={isLoading}
                            >
                                {isLoading ? "Signing in..." : "Sign In"}
                            </Button>
                        </form>
                    </TabsContent>
                    <TabsContent value="register" className="mt-6">
                        <form onSubmit={handleRegister} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="register-name" className="text-gray-300">Name</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input
                                        id="register-name"
                                        value={registerName}
                                        onChange={(e) => setRegisterName(e.target.value)}
                                        required
                                        className="pl-10 bg-white/5 border-white/10 focus:border-purple-500 text-white placeholder:text-gray-400"
                                        placeholder="Enter your name"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="register-email" className="text-gray-300">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input
                                        id="register-email"
                                        type="email"
                                        value={registerEmail}
                                        onChange={(e) => setRegisterEmail(e.target.value)}
                                        required
                                        className="pl-10 bg-white/5 border-white/10 focus:border-purple-500 text-white placeholder:text-gray-400"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="register-password" className="text-gray-300">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input
                                        id="register-password"
                                        type={showRegisterPassword ? "text" : "password"}
                                        value={registerPassword}
                                        onChange={(e) => setRegisterPassword(e.target.value)}
                                        required
                                        className="pl-10 bg-white/5 border-white/10 focus:border-purple-500 text-white placeholder:text-gray-400"
                                        placeholder="Create a password"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-white/10 hover:text-white"
                                        onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                                    >
                                        {showRegisterPassword ? (
                                            <EyeOff className="w-4 h-4 text-gray-400" />
                                        ) : (
                                            <Eye className="w-4 h-4 text-gray-400" />
                                        )}
                                    </Button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirm-password" className="text-gray-300">Confirm Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input
                                        id="confirm-password"
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        className="pl-10 bg-white/5 border-white/10 focus:border-purple-500 text-white placeholder:text-gray-400"
                                        placeholder="Confirm your password"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-white/10 hover:text-white"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="w-4 h-4 text-gray-400" />
                                        ) : (
                                            <Eye className="w-4 h-4 text-gray-400" />
                                        )}
                                    </Button>
                                </div>
                            </div>
                            {error && <p className="text-sm text-red-500">{error}</p>}
                            <Button 
                                type="submit" 
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                                disabled={isLoading}
                            >
                                {isLoading ? "Creating account..." : "Create Account"}
                            </Button>
                        </form>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    )
} 