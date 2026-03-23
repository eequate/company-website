import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Eequate. Whether you need a custom web application, mobile app, AI solution, or digital marketing strategy, our Sydney-based team is ready to help.",
  alternates: { canonical: "https://eequate.com/contact-us" },
  openGraph: { url: "https://eequate.com/contact-us", images: [{ url: "/assets/images/banner.webp", width: 1200, height: 630, alt: "Eequate Contact" }] },
  twitter: { card: "summary_large_image" as const, images: ["/assets/images/banner.webp"] },
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
