"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

import { useEffect } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const main = document.querySelector("main");
    if (!main) return;

    const elements = main.querySelectorAll("*");

    gsap.set(elements, { autoAlpha: 0 });
    gsap.to(elements, {
      autoAlpha: 1,
      duration: 0.7
      , // ⚡ faster fade-in
      ease: "power1.out",
      stagger: 0.008, // ⚡ quicker stagger
    });
  }, [pathname]);

  return (
    <html lang="en">
      <head><link rel="icon" href="/favicon.ico" sizes="any" /></head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 🌟 Custom Top Loader */}
        <NextTopLoader
          color="#ff1454"           // your coral color
          initialPosition={0.1}
          crawlSpeed={180}
          height={3.5}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={400}
          shadow="0 0 10px #e16b49, 0 0 5px #e16b49" // ✨ glowing shadow
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
 
        </ThemeProvider>
      </body>
    </html>
  );
}
