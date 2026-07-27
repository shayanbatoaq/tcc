import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thecorporatelens.com"),
  title: "The Corporate Lens | Pakistan's Corporate Story",
  description:
    "Credible corporate journalism, executive interviews, boardroom perspectives, and market intelligence from Pakistan.",
  keywords: [
    "The Corporate Lens",
    "Pakistan corporate news",
    "business journalism Pakistan",
    "executive interviews",
    "market intelligence",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Corporate Lens | Beyond the Headlines",
    description: "Pakistan's corporate story, in sharper focus.",
    url: "/",
    siteName: "The Corporate Lens",
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: "/og.png",
        width: 1743,
        height: 909,
        alt: "The Corporate Lens — Pakistan's corporate story, in sharper focus.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Corporate Lens | Beyond the Headlines",
    description: "Pakistan's corporate story, in sharper focus.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/the-corporate-lens-logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-PK" className={`${cinzel.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
