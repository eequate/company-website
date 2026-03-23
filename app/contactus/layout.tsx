import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Eequate. Whether you need a custom web application, mobile app, AI solution, or digital marketing strategy, our Sydney-based team is ready to help.",
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
