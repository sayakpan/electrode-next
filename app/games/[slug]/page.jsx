'use client'

import { useParams } from 'next/navigation'
import dynamic from 'next/dynamic'

const gameComponents = {
    'tic-tac-toe': dynamic(() => import('@/components/tic-tac-toe/TicTacToeMain'))
}

export default function GamePage() {
    const { slug } = useParams()
    const GameComponent = gameComponents[slug]

    if (!GameComponent) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <h1 className="text-2xl">Game not found</h1>
            </div>
        )
    }

    return <GameComponent />
} 