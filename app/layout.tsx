import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Travel",
    description: "Travel UX/UI app for camping.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <NavBar />
                <main className="relative overflow-hidden">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
