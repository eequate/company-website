"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCard from "./FeatureCard";

const ANIMATION = process.env.NEXT_PUBLIC_ANIMATION === "true";

const services = [
  {
    title: "Web Application Development",
    description:
      "Building custom web applications — from simple tools to complex platforms — for businesses and users alike.",
    image: "/assets/images/shot1.webp",
  },
  {
    title: "Mobile Application Development",
    description:
      "Developing apps that connect with users and drive engagement seamlessly.",
    image: "/assets/images/shot2.webp",
  },
  {
    title: "Marketing Technology & AI Automation Solutions",
    description:
      "Powering smarter marketing with AI-driven tools, automation, and data strategies that deliver real results.",
    image: "/assets/images/shot3.webp",
  },
];

// Helper function to conditionally apply AOS attributes
const getAosProps = (animation: string, delay: number) =>
  ANIMATION ? { "data-aos": animation, "data-aos-delay": delay } : {};

export default function ServicesSection() {
  useEffect(() => {
    if (ANIMATION) {
      AOS.init({
        duration: 1000, // Smooth animation over 1s
        easing: "ease-out", // Smooth easing
        once: true, // Only animate once when visible
      });
    }
  }, []);

  return (
    <div
      className="mx-auto text-center rounded-none md:rounded-[30px] lg:p-[48px] p-5 md:p-[20px]"
      style={{
        background: "linear-gradient(90deg, #1F2541 0%, #000000 45.72%)",
      }}
      {...getAosProps("fade-up", 0)}
    >
      <h2
        className="md:text-[48px] sm:text-[28px] text-[24px] md:leading-[62px] leading-[38px] font-semibold font-bold text-center text-white"
        {...getAosProps("fade-up", 200)}
      >
        Unlock the Power of Tailored{" "}
        <span className="text-[#005EFF]">Digital Solutions</span>
      </h2>
      <p
        className="text-center md:text-[24px] sm:text-[18px] text-[14px] md:leading-[40px] leading-[28px] font-medium mt-3 text-[#D5DAE2]"
        {...getAosProps("fade-up", 400)}
      >
        Our comprehensive services drive growth, engagement, and efficiency for
        your business.
      </p>
      <div className="flex justify-center flex-wrap gap-8 mt-10">
        {services.map((service, index) => (
          <div key={index} {...getAosProps("fade-up", 600 + index * 200)}>
            <ServiceCard
              image={service.image}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
