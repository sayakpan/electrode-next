import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

export function CTA() {
    return (
        <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Gaming?</h2>
                <p className="text-xl text-gray-300 mb-8">
                    Join thousands of players and discover your next favorite game today.
                </p>
                <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4"
                >
                    <Zap className="w-5 h-5 mr-2" />
                    Get Started Now
                </Button>
            </div>
        </section>
    )
}
