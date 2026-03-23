"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent } from "@/components/ui/card";

const ANIMATION = process.env.NEXT_PUBLIC_ANIMATION === "true";

const commitments = [
  {
    title: "Green-Powered Infrastructure",
    description:
      "We host on renewable-energy-backed cloud providers and choose vendors with verified sustainability credentials.",
    image: "/assets/images/dribble1.webp",
  },
  {
    title: "Carbon Offset",
    description:
      "We measure our operational footprint and offset it through certified carbon reduction programmes each year.",
    image: "/assets/images/dribble2.webp",
  },
  {
    title: "Efficient by Design",
    description:
      "Leaner code, optimised assets, and smart caching — better performance means less energy consumed per user.",
    image: "/assets/images/dribble3.webp",
  },
];

// Helper function to conditionally apply AOS attributes
const getAosProps = (animation: string, delay: number = 0) =>
  ANIMATION ? { "data-aos": animation, "data-aos-delay": delay } : {};

export default function PurposeSection() {
  useEffect(() => {
    if (ANIMATION) {
      AOS.init({ duration: 1000, once: true });
    }
  }, []);

  return (
    <div
      className="relative mx-auto text-center rounded-none md:rounded-[30px] lg:p-[48px] p-5 md:p-[20px] bg-cover"
      style={{ backgroundImage: `url(/assets/images/nature.webp)` }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-none md:rounded-[30px]"></div>

      <div className="relative">
        <h2
          className="md:text-[48px] text-[28px] md:leading-[62px] leading-[38px] font-semibold text-center text-white"
          {...getAosProps("fade-up")}
        >
          Building Responsibly,{" "}
          <span className="text-[#99CF63]">Running Green</span>
        </h2>
        <p
          className="text-center md:text-[24px] text-[16px] md:leading-[40px] leading-[28px] font-medium mt-3 text-[#D5DAE2]"
          {...getAosProps("fade-up", 200)}
        >
          The tech industry has a carbon problem. We do our part by choosing
          green-powered hosting, offsetting our emissions, and writing efficient
          code that uses fewer resources. It won&apos;t save the world on its
          own, but it&apos;s the right way to run a business.
        </p>
        <div className="flex justify-center flex-wrap gap-8 mt-10">
          {commitments.map((service, index) => (
            <div
              className="border-[5px] border-[#77AFFF4D] rounded-[30px]"
              key={index}
              {...getAosProps("fade-up", index * 200)}
            >
              <Card
                className="relative max-w-[380px] md:h-[380px] h-[320px] bg-gradient-to-b from-black to-gray-900 border-none rounded-[30px] shadow-lg p-[20px] bg-cover overflow-hidden"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundPosition: "center",
                }}
              >
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black opacity-50 rounded-[30px]"></div>

                <CardContent className="relative flex flex-col items-center text-center text-white h-full justify-between p-0">
                  <h3 className="text-[24px] text-[#FFFFFF] leading-[30px] font-semibold">
                    {service.title}
                  </h3>
                  <p className="md:text-[20px] text-[18px] text-[#FFFFFF] leading-[28px] font-normal">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
