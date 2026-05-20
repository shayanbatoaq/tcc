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

export const metadata: Metadata = {
  metadataBase: new URL("https://thecorporatecorner.pk"),
  title: {
    default: "The Corporate Corner | Pakistan's Premium Corporate Publication",
    template: "%s | The Corporate Corner",
  },
  description:
    "Pakistan's premier platform for corporate stories, leadership, business influence, executive interviews, and brand milestones.",
  openGraph: {
    title: "The Corporate Corner",
    description: "Premium corporate media and storytelling for Pakistan's business ecosystem.",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
