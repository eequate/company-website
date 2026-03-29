import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    images: [
      {
        url: "/assets/images/banner.webp",
        width: 1200,
        height: 630,
        alt: "Eequate – Digital Solutions Agency in Sydney, Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eequate | Digital Solutions Agency in Sydney, Australia",
    description:
      "We specialise in crafting innovative web and mobile applications, marketing technology, AI, and cloud solutions with a strong focus on user experience.",
    images: ["/assets/images/banner.webp"],
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
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://eequate.com",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Eequate",
    url: "https://eequate.com",
    logo: "https://eequate.com/favicon-32x32.png",
    description: "Sydney-based digital solutions agency specialising in custom web development, mobile apps, AI-powered solutions, UX/UI design, and cloud services.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    sameAs: [
      "https://www.linkedin.com/company/eequate",
      "https://www.linkedin.com/company/eequate/jobs",
    ],
    foundingDate: "2016",
  };

  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y12229G927"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y12229G927');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main className="max-w-[1440px] mx-auto pt-[100px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
