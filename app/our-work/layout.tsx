import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "See how Eequate has helped startups, enterprises, and digital agencies deliver impactful products. Explore our work with Travel CRM platforms, social media tools, and agency partnerships.",
  alternates: { canonical: "https://eequate.com/our-work" },
  openGraph: { url: "https://eequate.com/our-work", images: [{ url: "/assets/images/banner.webp", width: 1200, height: 630, alt: "Eequate Our Work" }] },
  twitter: { card: "summary_large_image" as const, images: ["/assets/images/banner.webp"] },
};

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
