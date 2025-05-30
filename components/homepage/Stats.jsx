export function Stats() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                            126+
                        </div>
                        <p className="text-gray-400">Games Available</p>
                    </div>
                    <div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                            50K+
                        </div>
                        <p className="text-gray-400">Active Players</p>
                    </div>
                    <div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                            1M+
                        </div>
                        <p className="text-gray-400">Games Played</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
