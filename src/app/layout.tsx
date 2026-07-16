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

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://creedtech.vercel.app";

export const metadata: Metadata = {
  // Default title — each page overrides this
  title: {
    default: "Creed Tech — Software Studio, Lagos, Nigeria",
    template: "%s",
  },
  description:
    "We build software that helps people and companies grow — from a first idea to something much bigger.",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: "website",
    siteName: "Creed Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Creed Tech — Software Studio, Lagos, Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
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
        <main className="flex-grow flex flex-col w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
