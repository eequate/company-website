import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Eequate — a Sydney-based digital solutions agency. Discover our story, values, and career opportunities in web development, AI, and cloud solutions.",
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
