import Header from "@/components/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { ReactNode } from "react";
import Providers from "@/Providers";

const inter = Inter({ subsets: ["latin"] });
const monsterrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-mosterrat",
});
export const metadata: Metadata = {
    title: "store",
    description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                <Providers>
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
