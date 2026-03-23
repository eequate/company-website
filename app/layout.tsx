import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Eequate | Digital Solutions Agency in Sydney, Australia",
    template: "%s | Eequate",
  },
  description:
    "Eequate is a Sydney-based digital solutions agency specialising in custom web development, mobile apps, AI-powered solutions, UX/UI design, digital marketing, and cloud services. We turn your vision into scalable digital products.",
  keywords: [
    "web development Sydney",
    "mobile app development Australia",
    "digital agency Sydney",
    "AI solutions Australia",
    "UX UI design",
    "cloud solutions",
    "digital marketing Sydney",
    "Eequate",
    "custom software development",
    "marketing technology",
  ],
  authors: [{ name: "Eequate" }],
  creator: "Eequate",
  metadataBase: new URL("https://eequate.com"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://eequate.com",
    siteName: "Eequate",
    title: "Eequate | Digital Solutions Agency in Sydney, Australia",
    description:
      "We specialise in crafting innovative web and mobile applications, marketing technology, AI, and cloud solutions with a strong focus on user experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eequate | Digital Solutions Agency in Sydney, Australia",
    description:
      "We specialise in crafting innovative web and mobile applications, marketing technology, AI, and cloud solutions with a strong focus on user experience.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

      >
        <Header />
        <main className="max-w-[1440px] mx-auto pt-[100px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
