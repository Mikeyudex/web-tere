import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
 variable: "--font-inter",
 subsets: ["latin"],
});

const playfair = Playfair_Display({
 variable: "--font-playfair",
 subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "Tere Yudex | Diseñadora",
 description: "Portfolio of Tere Yudex, Diseñadora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-[#0e0e0e] text-[#dac5a7] min-h-screen flex flex-col`}>
        <SmoothScroll>
          <Header />
          <main id="main-content" className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
