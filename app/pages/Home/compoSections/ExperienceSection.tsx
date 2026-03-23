"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent } from "@/components/ui/card";

const ANIMATION = process.env.NEXT_PUBLIC_ANIMATION === "true";

// Helper function to conditionally apply AOS attributes
const getAosProps = (animation: string, delay: number = 0) =>
  ANIMATION ? { "data-aos": animation, "data-aos-delay": delay } : {};

export default function ExperienceSection() {
  useEffect(() => {
    if (ANIMATION) {
      AOS.init({ duration: 1000, once: true });
    }
  }, []);

  return (
    <section className="mx-auto xl:px-[48px] px-0 md:px-[20px] py-[60px] w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start grid-flow-dense">
        {/* Left Side Cards */}
        <div className="grid grid-cols-1 gap-6 h-full lg:order-none order-last">
          <Card
            className="relative bg-black text-white rounded-none md:rounded-2xl overflow-hidden bg-[url('/assets/images/future.webp')] bg-cover bg-center"
            {...getAosProps("fade-up")}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <CardContent className="relative flex flex-col p-[48px] gap-[27px]">
              <h3 className="text-[32px] leading-[41.6px] font-semibold">
                Future-Ready Solutions
              </h3>
              <p className="md:text-[19px] text-[16px] leading-[32px] font-medium text-[#D5DAE2]">
                Delivering adaptable and scalable digital platforms that grow
                with your business and empower your success.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right Side (Text & Another Card) */}
        <div className="flex flex-col lg:gap-[48px] gap-[32px] lg:order-none order-first max-w-full overflow-hidden container mx-auto ">
          <div className="flex flex-col" {...getAosProps("fade-right")}>
            <h1 className="text-[24px] md:text-[48px] font-semibold lg:leading-[62px] leading-[36px] leading-tight">
              Building <span className="text-[#005EFF]">Digital</span> <br />
              <span className="text-[#005EFF]">Experiences</span> That Transform{" "}
              <br />
              Business
            </h1>
            <p className="mt-4 text-[#6F849E] font-medium lg:text-[16px] leading-[28px]">
              We combine innovative technology with human-centered design to
              create impactful and meaningful solutions.
            </p>
          </div>

          <Card
            className="relative bg-black text-white rounded-none md:rounded-2xl overflow-hidden bg-[url('/assets/images/ai.webp')] bg-cover bg-center h-[325px] w-full max-w-full"
            {...getAosProps("fade-left")}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <CardContent className="relative flex flex-col p-[48px] gap-[27px]">
              <h3 className="text-[32px] leading-[41.6px] font-semibold">
                AI-Powered Innovation
              </h3>
              <p className="md:text-[19px] text-[16px] leading-[32px] font-medium text-[#D5DAE2]">
                Leveraging AI to automate, optimize, and enhance user
                interactions for smarter results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
