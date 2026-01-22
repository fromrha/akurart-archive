"use client";

import { Geist, Geist_Mono, Tilt_Warp, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tiltWarp = Tilt_Warp({
  variable: "--font-tilt-warp",
  subsets: ["latin"],
  weight: "400", // Tilt Warp usually has one weight, but we can specify if needed.
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tiltWarp.variable} ${instrumentSerif.variable} antialiased bg-[#0F0E0E] text-[#FDFFFF]`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
