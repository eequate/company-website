import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Eequate's digital services including custom web development, mobile app development, AI-powered solutions, UX/UI design, digital marketing, and cloud solutions. Based in Sydney, Australia.",
  alternates: { canonical: "https://eequate.com/services" },
  openGraph: { url: "https://eequate.com/services", images: [{ url: "/assets/images/banner.webp", width: 1200, height: 630, alt: "Eequate Services" }] },
  twitter: { card: "summary_large_image" as const, images: ["/assets/images/banner.webp"] },
};
import ServiceCard from "../pages/Home/compoSections/FeatureCard";
import FAQSection from "../pages/Home/compoSections/Faq";
import CTABanner from "../pages/Home/compoSections/Banner";

export default function page() {
  const services = [
    {
      title: "Custom Web Development",
      description:
        "We create responsive, user-friendly websites that not only look stunning but also drive engagement. From corporate websites to e-commerce platforms, we ensure seamless functionality and top-tier performance.",
      image: "/assets/images/shot1.webp",
    },
    {
      title: "Mobile App Development",
      description:
        "We design and develop intuitive mobile applications tailored to your needs. Whether it’s iOS or Android, our apps provide exceptional user experiences and ensure high performance.",
      image: "/assets/images/shot2.webp",
    },
    {
      title: "AI-Powered Solutions",
      description:
        "Transform your business processes with AI-driven solutions. From predictive analytics to chatbots, our expertise in artificial intelligence helps you stay ahead of the competition.",
      image: "/assets/images/shot3.webp",
    },
    {
      title: "UX/UI Design",
      description:
        "We craft intuitive, user-centered designs that captivate your audience and drive engagement. From wireframes to prototypes, we ensure every interaction leaves a lasting impression.",
      image: "/assets/images/shot3.webp",
    },
    {
      title: "Digital Marketing",
      description:
        "Reach the right audience with our data-driven digital marketing strategies. From SEO to social media campaigns, we optimize your brand presence for maximum impact.",
      image: "/assets/images/shot2.webp",
    },
    {
      title: "Cloud Solutions",
      description:
        "Migrate to the cloud with confidence. Our cloud solutions are designed for flexibility, security, and scalability, helping your business adapt to future demands effortlessly.",
      image: "/assets/images/shot1.webp",
    },
  ];

  return (
    <div className="md:px-[48px] px-0">
      <div className="lg:px-0 lg:pb-[60px] pb-[40px] px-0 md:px-[20px] pt-[30px]">
        <h1 className="text-[#006AFF] md:text-[72px] text-[62px] md:leading-[90px] leading-[72px] font-semibold text-center pb-[60px] px-5 md:px-0">
          Our Services
        </h1>
        <div
          className="mx-auto text-center rounded-none md:rounded-[30px] lg:p-[48px] p-5 md:p-[20px]"
          style={{
            background: "linear-gradient(90deg, #1F2541 0%, #000000 45.72%)",
          }}
        >
          <h3 className="md:text-[24px] text-[#D5DAE2] md:leading-[40px] leading-[26px] text-[18px] font-medium lg:mt-0 mt-8">
            Our comprehensive services drive growth, engagement, and efficiency
            for your business.
          </h3>
          <div className="flex justify-center flex-wrap gap-8 mt-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Social Proof */}
      <div className="text-center py-[60px] px-5 md:px-[48px]">
        <h2 className="md:text-[48px] text-[32px] font-semibold md:leading-[62px] leading-[42px] text-[#1F2541]">
          Startups <span className="text-[#006AFF]">Trust</span> Us to Deliver
        </h2>
        <p className="text-[#6F849E] text-[16px] leading-[28px] font-medium mt-4 max-w-[800px] mx-auto">
          From first MVP to scaled production systems, early-stage founders
          choose Eequate because we combine deep engineering expertise with
          genuine product thinking. We don&apos;t just write code — we help
          shape the product.
        </p>
      </div>

      {/* Software Consultancy */}
      <div className="px-0 md:px-0 pb-[60px]">
        <div
          className="rounded-none md:rounded-[30px] lg:p-[48px] p-5 md:p-[20px]"
          style={{
            background: "linear-gradient(90deg, #1F2541 0%, #000000 45.72%)",
          }}
        >
          <h2 className="text-white md:text-[48px] text-[32px] font-semibold md:leading-[62px] leading-[42px] text-center mb-4">
            Software Consultancy
          </h2>
          <p className="text-[#D5DAE2] text-[16px] leading-[28px] font-medium max-w-[800px] mx-auto text-center mb-10">
            Beyond development, we offer hands-on consultancy for teams
            navigating complex technical decisions. Architecture reviews, tech
            stack selection, scalability planning, and product strategy — we
            bring senior-level thinking to every engagement.
          </p>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            {[
              { title: "Architecture & Tech Strategy", description: "We help you choose the right tools and design systems that scale." },
              { title: "Product & UX Advisory", description: "Practical guidance on what to build, why, and how users will experience it." },
              { title: "Team Augmentation", description: "Embed our engineers into your workflow — same rituals, same Slack channels, same standards." },
            ].map((point, index) => (
              <div
                key={index}
                className="rounded-[20px] border-[1px] border-[#1F254180] p-[28px] md:p-[32px]"
                style={{
                  background: "linear-gradient(135deg, rgba(31,37,65,0.4) 0%, rgba(0,0,0,0.3) 100%)",
                }}
              >
                <h3 className="text-white text-[20px] leading-[28px] font-semibold mb-2">
                  {point.title}
                </h3>
                <p className="text-[#D5DAE2] text-[15px] leading-[26px] font-medium">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <FAQSection />
      </div>
      <div>
        <CTABanner />
      </div>
    </div>
  );
}
