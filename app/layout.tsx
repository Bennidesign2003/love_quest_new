"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useRef } from "react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// @ts-ignore
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => audioRef.current?.play();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Lofi Music Player */}
        <div className="fixed bottom-4 right-4 z-50">
          <audio ref={audioRef} loop>
            <source src="/music/lofi.mp3" type="audio/mpeg" />
          </audio>
          <button
            onClick={handlePlay}
            className="px-4 py-2 bg-pink-500 text-white rounded shadow-lg hover:bg-pink-600 transition"
          >
            Start Lofi 🎵
          </button>
        </div>

        {children}
      </body>
    </html>
  );
}