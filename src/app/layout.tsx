import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Body sans — quiet, legible, modern. Carries the intro copy and links.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Mono — used only for small uppercase kicker and meta labels (location,
// role tags, credits). The editorial "captioning" voice.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// PP Editorial New — the high-contrast display serif that carries the name and
// the headline. Self-hosted (a foundry font, not on Google Fonts) so it renders
// exactly as designed. File lives in ./fonts.
const editorialNew = localFont({
  src: "./fonts/PPEditorialNew-Regular.woff2",
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Camille Devaney",
  description:
    "Camille Devaney is a Miami-based operator working across institutional sales and trading, growth and marketing, and building. Resume, contact, and LinkedIn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${editorialNew.variable} h-full antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
