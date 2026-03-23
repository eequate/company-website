import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Eequate's digital services including custom web development, mobile app development, AI-powered solutions, UX/UI design, digital marketing, and cloud solutions. Based in Sydney, Australia.",
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
      <div className="lg:px-0 lg:pb-[60px] md:px-0 sm:px-[20px] pb-[40px] px-[20px] pt-[30px]">
        <h1 className="text-[#006AFF] md:text-[72px] text-[62px] md:leading-[90px] leading-[72px] font-semibold text-center pb-[60px]">
          Our Services
        </h1>
        <div
          className="mx-auto text-center rounded-[30px] lg:p-[48px] p-[20px]"
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
      <div>
        <FAQSection />
      </div>
      <div>
        <CTABanner />
      </div>
    </div>
  );
}
