import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextUIProvider } from "@nextui-org/react";
import "@/app/styles/globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Bareshit Angola",
    description: "Raíz gerando raízes",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-AO">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NextUIProvider>
                    {children}
                </NextUIProvider>
            </body>
        </html>
    );
}
