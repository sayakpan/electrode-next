import "@/public/css/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";


export const metadata = {
    title: "Electrode Games",
    description: "A casual platform for gamers. Developed by Sayak.",
    keywords: ["Electrode Games", "Online Games", "Multiplayer", "Gaming Platform"],
    authors: [{ name: "Sayak", url: "https://electrodegames.site" }],
    creator: "Sayak",
    publisher: "Electrode Games",

    openGraph: {
        title: "Electrode Games",
        description: "A casual platform for gamers. Developed by Sayak.",
        url: "https://electrodegames.site",
        siteName: "Electrode Games",
        images: [
            {
                url: "https://electrodegames.site/logo.png", // replace with your image URL
                width: 1200,
                height: 630,
                alt: "Electrode Games - Play Now",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Electrode Games",
        description: "A casual platform for gamers. Developed by Sayak.",
        images: ["https://electrodegames.site/logo.png"],
    },

    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 antialiased">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
