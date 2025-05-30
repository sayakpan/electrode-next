'use client'

import { useState, useEffect } from 'react'
import Cookies from 'universal-cookie'
import { fetchApi } from '@/lib/api'

const cookies = new Cookies()

export function useAuth() {
    const [user, setUser] = useState(null)
    const [profile, setProfile] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const token = cookies.get('token')
        const userData = cookies.get('user')
        const profileData = cookies.get('profile')

        if (token && userData && profileData) {
            setUser(userData)
            setProfile(profileData)
        }
        setIsLoading(false)
    }, [])

    const logout = async () => {
        try {
            await fetchApi('api/accounts/logout', {
                method: 'GET',
            })
        } catch (error) {
            console.error('Logout error:', error)
        } finally {
            // Clear cookies regardless of API success
            cookies.remove('token')
            cookies.remove('user')
            cookies.remove('profile')
            setUser(null)
            setProfile(null)
        }
    }

    return {
        user,
        profile,
        isLoading,
        logout,
        isAuthenticated: !!user
    }
} 