import "@/public/css/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
    title: "Electrode Games",
    description: "Developed by Sayak",
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
