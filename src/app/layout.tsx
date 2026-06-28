import type { Metadata } from "next";
import { Geist, Geist_Mono, Gwendolyn } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// PP Editorial New — the high-contrast editorial display serif used for the name
// across the bottom. Self-hosted (it's a foundry font, not on Google Fonts), so
// it renders exactly as designed. File lives in ./fonts.
const editorialNew = localFont({
  src: "./fonts/PPEditorialNew-Regular.woff2",
  variable: "--font-editorial",
  display: "swap",
});

// Gwendolyn — a flowing calligraphy script, used for the "Camille Devaney" name.
const gwendolyn = Gwendolyn({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gwendolyn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Camille Devaney",
  description:
    "The personal website of Camille Devaney. Sales and trading, growth and marketing, builder and creative.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${editorialNew.variable} ${gwendolyn.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
