import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how Eequate has helped startups, enterprises, and digital agencies deliver impactful products. Explore our work with Travel CRM platforms, social media tools, and agency partnerships.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
