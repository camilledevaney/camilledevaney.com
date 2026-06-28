import type { Metadata } from "next";
import { Geist, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import content from "@/content.json";

// Body sans — quiet, legible, modern. Carries the intro copy.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// IBM Plex Mono — the label voice: eyebrow, role tags, buttons, footer meta.
const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  subsets: ["latin"],
});

// PP Editorial New — the display serif that carries the name. Self-hosted.
const editorialNew = localFont({
  src: "./fonts/PPEditorialNew-Regular.woff2",
  variable: "--font-editorial",
  display: "swap",
});

const { site } = content;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: site.ogImage, width: 760, height: 1198, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
      className={`${geistSans.variable} ${plexMono.variable} ${editorialNew.variable} h-full antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
