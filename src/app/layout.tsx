import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Inline encoded Saturn SVG icon for browser favicon
const saturnSvgFavicon = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" fill="%23ffffff"/><ellipse cx="12" cy="12" rx="9" ry="3.2" stroke="%23ffffff" stroke-width="1.6" transform="rotate(-22 12 12)"/></svg>`;

export const metadata: Metadata = {
  title: "Interspace | Live Multi-Session Chat & Realtime Protocol",
  description:
    "Next-generation in-browser live communication with multi-tenant isolation, cryptographic peer mesh, and autonomous AI agents.",
  icons: {
    icon: saturnSvgFavicon,
    shortcut: saturnSvgFavicon,
    apple: saturnSvgFavicon,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">{children}</body>
    </html>
  );
}