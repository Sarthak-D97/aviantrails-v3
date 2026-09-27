import type { Metadata, Viewport } from "next";
import { Fraunces, Lexend } from "next/font/google";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Preloader } from "@/components/soft/Preloader";
import { circadianScript } from "@/components/soft/circadian";
import { indexable, origin, site } from "@/content/site";
import "./globals.css";

// Fraunces sets the headings; its SOFT axis follows the time of day (crisp at noon, soft at dusk and
// night). Lexend, built for reading ease, sets everything else.
const fraunces = Fraunces({ subsets: ["latin"], axes: ["SOFT", "WONK", "opsz"], style: ["normal", "italic"], variable: "--font-fraunces", display: "swap" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  robots: indexable ? { index: true, follow: true } : { index: false, follow: false },
  title: {
    default: "Avian Trails · Birding and bird photography tours with Rajesh Panwar",
    template: "%s · Avian Trails",
  },
  description: site.description,
  applicationName: "Avian Trails",
  authors: [{ name: "Rajesh Panwar" }],
  keywords: [
    "birding tours India",
    "bird photography tours",
    "Rajesh Panwar",
    "Kaladhungi birding",
    "Corbett birding",
    "Uttarakhand birdwatching",
    "Milieu Villa Birding Lodge",
    "Manila Birding Lodge",
    "Cheer Pheasant",
  ],
  openGraph: {
    type: "website",
    siteName: "Avian Trails",
    locale: "en_IN",
    url: site.url,
  },
  twitter: { card: "summary_large_image", creator: "@rajeshpbirder" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#e3e9d7",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" data-phase="day" className={`${fraunces.variable} ${lexend.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: circadianScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <Preloader />
        <Header />
        <main id="main" className="flex-1 overflow-x-clip">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
