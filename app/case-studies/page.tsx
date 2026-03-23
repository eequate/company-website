import { Metadata } from "next";
import FAQSection from "../pages/Home/compoSections/Faq";
import CTABanner from "../pages/Home/compoSections/Banner";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore Eequate's portfolio of in-house products and client partnerships. From AI-powered platforms to award-winning mobile apps, see what we've built.",
};

const products = [
  {
    tag: "Travel & Hospitality",
    title: "Niti Travel",
    url: "niti.travel",
    description:
      "An all-in-one platform for travel agencies to manage operations, build itineraries, and close bookings faster. Niti Travel combines client management, supplier databases, inquiry tracking, and an AI assistant that turns plain-language trip descriptions into complete itineraries in under 30 seconds.",
    highlights: [
      "AI-powered itinerary builder with drag-and-drop day planner",
      "End-to-end workflow from inquiry to confirmed booking",
      "Adopted by 100+ travel agencies",
    ],
  },
  {
    tag: "Social Media & SaaS",
    title: "Soshable",
    url: "soshable.ai",
    description:
      "An AI-powered social media management platform that creates, schedules, and optimises content across all channels. Soshable auto-generates posts from website updates or prompts, applies brand-consistent designs, and delivers actionable analytics — putting social media on autopilot for businesses of every size.",
    highlights: [
      "Auto post generation with full customisation and approval workflows",
      "Smart content plans aligned with brand identity",
      "Built-in analytics, team collaboration, and content library",
    ],
  },
  {
    tag: "AI & Messaging",
    title: "AskJules AI",
    url: null,
    description:
      "A WhatsApp bot launched alongside ChatGPT to bring the power of large language models to the world's most popular messaging app. AskJules gave everyday users instant access to AI — no new apps to download, no accounts to create. Just open WhatsApp and ask.",
    highlights: [
      "One of the earliest LLM-powered WhatsApp bots globally",
      "Zero-friction access to AI through a familiar interface",
      "Served thousands of queries from day one",
    ],
  },
  {
    tag: "Health Tech & Mobile",
    title: "Veta",
    url: null,
    description:
      "A location-based mobile app that alerts users about disease outbreaks reported near them. Built for both iOS and Android, Veta lets people monitor their homes, offices, and schools for vector-borne diseases like Dengue and Zika — turning public health data into personal, actionable awareness.",
    highlights: [
      "Winner of the SLT Zero One Award",
      "Location-based alerts with configurable radius monitoring",
      "Community-driven disease reporting and verification",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="md:px-[48px] px-0">
      {/* Page Title */}
      <div className="lg:px-0 lg:pb-[60px] md:px-0 sm:px-[20px] pb-[40px] px-[20px] pt-[30px]">
        <h1 className="text-[#006AFF] md:text-[72px] text-[62px] md:leading-[90px] leading-[72px] font-semibold text-center pb-[30px]">
          Our Work
        </h1>
        <p className="text-[#6F849E] text-[16px] md:text-[20px] leading-[28px] md:leading-[34px] font-medium text-center max-w-[800px] mx-auto pb-[60px]">
          Every product on this page was{" "}
          <span className="text-[#1F2541] font-semibold">conceived, designed, and engineered
          in-house</span>{" "}
          by the Eequate team. These aren&apos;t client projects —
          they&apos;re our own.
        </p>

        {/* Products */}
        <div
          className="rounded-[30px] lg:p-[48px] p-[20px]"
          style={{
            background: "linear-gradient(90deg, #1F2541 0%, #000000 45.72%)",
          }}
        >
          <div className="flex flex-col gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="rounded-[30px] border-[1px] border-[#1F254180] p-[32px] md:p-[48px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(31,37,65,0.6) 0%, rgba(0,0,0,0.4) 100%)",
                }}
              >
                {/* Industry Tag */}
                <span className="inline-block text-[#006AFF] text-[13px] font-semibold tracking-wide uppercase bg-[#006AFF15] px-4 py-[6px] rounded-full mb-4">
                  {product.tag}
                </span>

                {/* Title & URL */}
                <h2 className="text-white md:text-[36px] text-[28px] md:leading-[46px] leading-[36px] font-semibold mb-1">
                  {product.title}
                </h2>
                {product.url && (
                  <p className="text-[#006AFF] text-[14px] font-medium mb-4">
                    {product.url}
                  </p>
                )}

                {/* Description */}
                <p className="text-[#D5DAE2] text-[16px] leading-[28px] font-medium max-w-[800px] mb-8 mt-4">
                  {product.description}
                </p>

                {/* Highlights */}
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                  {product.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="border-l-[2px] border-[#006AFF] pl-4"
                    >
                      <p className="text-white text-[15px] leading-[24px] font-medium">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Agency Partnerships */}
      <div className="text-center py-[60px] px-[20px] md:px-[48px]">
        <h2 className="md:text-[48px] text-[32px] font-semibold md:leading-[62px] leading-[42px] text-[#1F2541]">
          We Also Build for{" "}
          <span className="text-[#006AFF]">Leading Agencies</span>
        </h2>
        <p className="text-[#6F849E] text-[16px] leading-[28px] font-medium mt-4 max-w-[800px] mx-auto">
          Prominent digital and creative agencies partner with Eequate as their
          dedicated engineering arm. When their clients need complex, enterprise-grade
          applications, we step in as an embedded extension of their team —
          seamless, reliable, and always behind the scenes. These are externally
          internal partnerships built on trust and consistent delivery.
        </p>
        <div className="flex justify-center mt-8">
          <Link
            href="/contact-us"
            className="h-[48px] sm:h-[56px] border-[1.5px] border-[#1F2541] inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-base sm:text-lg font-semibold bg-gradient-to-r from-[#1F2541] to-[#000000] hover:from-[#000000] hover:to-[#1F2541] transition-all duration-300 shadow-lg"
          >
            Partner With Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <FAQSection />
      </div>

      {/* CTA Banner */}
      <div>
        <CTABanner />
      </div>
    </div>
  );
}
