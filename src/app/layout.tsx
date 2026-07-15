import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creed Tech",
  description: "We build software that helps people and companies grow — from a first idea to something much bigger.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-paper text-charcoal">
        <Header />
        <main className="flex-grow flex flex-col w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


