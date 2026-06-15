import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thecorporatelens.com"),
  title: {
    default: "The Corporate Lens | Beyond the Headlines",
    template: "%s | The Corporate Lens",
  },
  description:
    "The Corporate Lens is a premium corporate media and storytelling platform spotlighting the people, decisions, and developments shaping Pakistan's corporate landscape.",
  keywords: [
    "The Corporate Lens",
    "Beyond the Headlines",
    "corporate storytelling Pakistan",
    "business media Pakistan",
    "corporate journalism",
    "executive interviews",
  ],
  openGraph: {
    title: "The Corporate Lens | Beyond the Headlines",
    description:
      "Premium corporate media, editorial credibility, and executive storytelling for Pakistan's business landscape.",
    url: "https://thecorporatelens.com",
    siteName: "The Corporate Lens",
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: "/the-corporate-lens-logo.png",
        width: 1254,
        height: 1254,
        alt: "The Corporate Lens logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Corporate Lens",
    description: "Beyond the Headlines",
    images: ["/the-corporate-lens-logo.png"],
  },
  icons: {
    icon: "/the-corporate-lens-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
