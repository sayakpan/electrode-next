'use client'

import { useState, useEffect } from 'react'
import { X, Circle, RefreshCw, User, Bot } from 'lucide-react'
import { Button } from '@/components/ui/button'

const GAME_IMAGE = '/images/tic-tac-toe.png'

const TicTacToeMain = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)
    const [winner, setWinner] = useState(null)
    const [winningLine, setWinningLine] = useState([])
    const [gameHistory, setGameHistory] = useState([])
    const [gameMode, setGameMode] = useState(null) // null, 'pvp', 'pvc'
    const [isComputerThinking, setIsComputerThinking] = useState(false)

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ]

    const checkWinner = (squares) => {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], line: combination }
            }
        }
        return { winner: null, line: [] }
    }

    // Computer AI logic
    const findBestMove = (squares) => {
        // Check for winning move
        for (let i = 0; i < 9; i++) {
            if (!squares[i]) {
                const testBoard = [...squares]
                testBoard[i] = 'O'
                if (checkWinner(testBoard).winner) {
                    return i
                }
            }
        }

        // Check for blocking move
        for (let i = 0; i < 9; i++) {
            if (!squares[i]) {
                const testBoard = [...squares]
                testBoard[i] = 'X'
                if (checkWinner(testBoard).winner) {
                    return i
                }
            }
        }

        // Take center if available
        if (!squares[4]) return 4

        // Take corners
        const corners = [0, 2, 6, 8]
        const availableCorners = corners.filter(corner => !squares[corner])
        if (availableCorners.length > 0) {
            return availableCorners[Math.floor(Math.random() * availableCorners.length)]
        }

        // Take any available edge
        const edges = [1, 3, 5, 7]
        const availableEdges = edges.filter(edge => !squares[edge])
        if (availableEdges.length > 0) {
            return availableEdges[Math.floor(Math.random() * availableEdges.length)]
        }

        // Take any available move
        return squares.findIndex(square => !square)
    }

    const makeComputerMove = () => {
        if (winner || isXNext) return

        setIsComputerThinking(true)
        // Add a small delay to make the computer's move feel more natural
        setTimeout(() => {
            const bestMove = findBestMove(board)
            handleMove(bestMove)
            setIsComputerThinking(false)
        }, 500)
    }

    useEffect(() => {
        if (gameMode === 'pvc' && !isXNext && !winner && !isComputerThinking) {
            makeComputerMove()
        }
    }, [isXNext, gameMode, winner, isComputerThinking, board])

    const handleMove = (index) => {
        if (board[index] || winner) return

        const newBoard = [...board]
        newBoard[index] = isXNext ? 'X' : 'O'
        setBoard(newBoard)
        setIsXNext(!isXNext)

        const { winner: gameWinner, line } = checkWinner(newBoard)
        if (gameWinner) {
            setWinner(gameWinner)
            setWinningLine(line)
            setGameHistory([...gameHistory, { winner: gameWinner, moves: newBoard }])
        } else if (!newBoard.includes(null)) {
            setWinner('draw')
            setWinningLine([])
            setGameHistory([...gameHistory, { winner: 'draw', moves: newBoard }])
        } else {
            setWinningLine([])
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setIsXNext(true)
        setWinner(null)
        setWinningLine([])
    }

    const getCellClass = (index) => {
        const baseClass = "w-24 h-24 flex items-center justify-center text-4xl font-bold transition-all duration-300 hover:bg-white/10 cursor-pointer relative group"
        if (winningLine.includes(index)) {
            return `${baseClass} bg-green-500/20`
        }
        return baseClass
    }

    const renderCellContent = (cell, index) => {
        if (cell) {
            return cell === 'X' ? (
                <X className="w-12 h-12 text-blue-400" />
            ) : (
                <Circle className="w-12 h-12 text-pink-400" />
            )
        }

        if (!winner && !isComputerThinking) {
            return (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-30 transition-opacity duration-200">
                    {isXNext ? (
                        <X className="w-12 h-12 text-blue-400" />
                    ) : (
                        <Circle className="w-12 h-12 text-pink-400" />
                    )}
                </div>
            )
        }

        return null
    }

    if (!gameMode) {
        return (
            <div className="min-h-screen bg-black text-white py-8 flex items-center justify-center">
                <div className="bg-white/5 rounded-xl p-8 flex flex-col items-center space-y-8 w-full max-w-2xl">
                    <img src={GAME_IMAGE} alt="Tic Tac Toe" className="w-32 h-32 object-contain rounded-lg mb-2" />
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Tic Tac Toe
                    </h1>
                    <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                        <Button
                            onClick={() => setGameMode('pvp')}
                            className="h-32 flex flex-col items-center justify-center space-y-2 bg-white/5 hover:bg-white/10 transition-all duration-300"
                        >
                            <User className="w-8 h-8" />
                            <span>Player vs Player</span>
                        </Button>
                        <Button
                            onClick={() => setGameMode('pvc')}
                            className="h-32 flex flex-col items-center justify-center space-y-2 bg-white/5 hover:bg-white/10 transition-all duration-300"
                        >
                            <Bot className="w-8 h-8" />
                            <span>Player vs Computer</span>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black text-white py-8 flex items-center justify-center">
            <div className="w-full max-w-4xl bg-white/5 rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
                {/* Left Column */}
                <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-8 space-y-6 bg-black/60">
                    <img src={GAME_IMAGE} alt="Tic Tac Toe" className="w-40 h-40 object-contain rounded-lg shadow mb-2" />
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
                        Tic Tac Toe
                    </h1>
                    <div className="grid grid-cols-2 gap-4 w-full max-w-xs mt-4">
                        <div className="bg-white/5 p-4 rounded-lg text-center">
                            <div className="text-sm text-gray-400">Games Played</div>
                            <div className="text-2xl font-bold">{gameHistory.length}</div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg text-center">
                            <div className="text-sm text-gray-400">Current Streak</div>
                            <div className="text-2xl font-bold">
                                {gameHistory.length > 0 && gameHistory[gameHistory.length - 1].winner !== 'draw' ? 1 : 0}
                            </div>
                        </div>
                    </div>
                    <Button
                        onClick={() => setGameMode(null)}
                        variant="ghost"
                        className="mt-4"
                    >
                        Change Mode
                    </Button>
                </div>
                {/* Right Column */}
                <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-8 space-y-8">
                    {/* Game Status */}
                    <div className="text-xl font-semibold min-h-[32px]">
                        {isComputerThinking ? (
                            <span className="text-yellow-400">Computer is thinking...</span>
                        ) : winner ? (
                            winner === 'draw' ? (
                                "It's a Draw!"
                            ) : (
                                <span className="text-green-400">Player {winner} Wins!</span>
                            )
                        ) : (
                            <span className="text-blue-400">
                                {gameMode === 'pvc' && !isXNext ? 'Computer' : `Player ${isXNext ? 'X' : 'O'}`}'s Turn
                            </span>
                        )}
                    </div>
                    {/* Game Board */}
                    <div className="grid grid-cols-3 gap-2 bg-white/5 p-4 rounded-xl">
                        {board.map((cell, index) => (
                            <button
                                key={index}
                                onClick={() => handleMove(index)}
                                className={getCellClass(index)}
                                disabled={!!winner || isComputerThinking || (gameMode === 'pvc' && !isXNext)}
                            >
                                {renderCellContent(cell, index)}
                            </button>
                        ))}
                    </div>
                    {/* Reset Button */}
                    <Button
                        onClick={resetGame}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 cursor-pointer"
                    >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        New Game
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TicTacToeMain 