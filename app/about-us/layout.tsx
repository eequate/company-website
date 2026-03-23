import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Eequate — a Sydney-based digital solutions agency. Discover our story, values, and career opportunities in web development, AI, and cloud solutions.",
  alternates: { canonical: "https://eequate.com/about-us" },
  openGraph: { url: "https://eequate.com/about-us", images: [{ url: "/assets/images/banner.webp", width: 1200, height: 630, alt: "Eequate About Us" }] },
  twitter: { card: "summary_large_image" as const, images: ["/assets/images/banner.webp"] },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
