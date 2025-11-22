import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar2 } from "@/components/Navbar2";
import { FooterClean } from "@/components/FooterClean";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio | David Silva Bello",
  description: "Portafolio profesional de David Silva Bello, desarrollador full‑stack.",
  openGraph: {
    title: "Portafolio | David Silva Bello",
    description: "Desarrollador Full‑Stack especializado en React, Next.js, Django y PostgreSQL.",
    url: "https://davidsilvabello.dev",
    siteName: "Portafolio David Silva Bello",
    locale: "es_MX",
    type: "website",
  },
  authors: [{ name: "David Silva Bello" }],
  keywords: [
    "Desarrollador Full Stack",
    "React",
    "Next.js",
    "Django",
    "PostgreSQL",
    "Portafolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'David Silva Bello',
    jobTitle: 'Full-Stack Developer',
    url: 'https://davidsilvabello.dev',
    sameAs: [
      'https://github.com/davidsilvabello',
      'https://www.linkedin.com/in/davidsilvabello'
    ]
  };
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <Navbar2 />
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 md:px-8">
          {children}
        </main>
        <FooterClean />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
