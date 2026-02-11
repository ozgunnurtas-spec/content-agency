import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tonstudio-bremen.de"),
  title: {
    default: "Tonstudio Bremen – Recording, Mixing, Mastering",
    template: "%s · Tonstudio Bremen",
  },
  description:
    "Professionelles Tonstudio in Bremen für Artists, Rapper und Sänger. Recording, Mixing & Mastering – präziser Sound, klare Kommunikation, professionelles Ergebnis.",
  keywords: [
    "Tonstudio Bremen",
    "Recording Bremen",
    "Mixing Bremen",
    "Mastering Bremen",
    "Tonstudio",
    "Recording",
    "Mixing",
    "Mastering",
    "Aufnahmestudio",
    "Musikproduktion Bremen",
  ],
  authors: [{ name: "Tonstudio Bremen" }],
  creator: "Tonstudio Bremen",
  openGraph: {
    title: "Tonstudio Bremen – Recording. Mix. Master.",
    description:
      "Professionelles Tonstudio in Bremen für Artists, Rapper und Sänger.",
    type: "website",
    locale: "de_DE",
    siteName: "Tonstudio Bremen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#f7f6f3" />
      </head>
      <body>{children}</body>
    </html>
  );
}