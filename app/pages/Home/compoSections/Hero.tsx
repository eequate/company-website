"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ANIMATION = process.env.NEXT_PUBLIC_ANIMATION === "true";

export default function HeroSection() {
  useEffect(() => {
    if (ANIMATION) {
      AOS.init({
        duration: 1000, // Animation duration
        once: true, // Ensures animations happen only once
        easing: "ease-in-out",
      });
    }
  }, []);

  return (
    <section className="relative flex items-center justify-center w-full max-w-[1344px] px-6 sm:px-12 lg:px-[48px] py-16 sm:py-20 lg:py-[60px]">
      <div
        className="absolute inset-0 bg-[#121212] opacity-0.5 rounded-[20px] lg:rounded-[30px] justify-center flex items-center"
        {...(ANIMATION ? { "data-aos": "fade-in" } : {})}
        style={{
          backgroundImage: "url('/herobg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="group relative md:w-full w-[300px] md:h-full h-[300px] md:rounded-none rounded-full overflow-hidden transition-transform duration-500 group-hover:scale-110"
          {...(ANIMATION ? { "data-aos": "zoom-in" } : {})}
        >
          {/* <Spline
                        scene="https://prod.spline.design/c0krNktqMJUdlRU2/scene.splinecode"
                        className="md:rounded-none rounded-full"
                    /> */}
        </div>
      </div>

      <div className="relative z-10 text-center text-white py-4 sm:py-20 lg:py-[100px] flex flex-col gap-4 sm:gap-8 lg:gap-[48px]">
        <h1
          className="text-[20px] sm:text-5xl lg:text-[72px] font-semibold leading-tight"
          {...(ANIMATION ? { "data-aos": "fade-up" } : {})}
        >
          Transforming <span className="text-[#006AFF]">Ideas</span> into
          Impactful <br className="hidden sm:block" />
          <span className="text-[#006AFF]">Digital Experiences</span>
        </h1>
        <p
          className="mt-4 sm:mt-6 text-[13px] sm:text-xl lg:text-[24px] max-w-[90%] text-[#D5DAE2] sm:max-w-[750px] lg:max-w-[1010px] mx-auto font-medium"
          {...(ANIMATION
            ? { "data-aos": "fade-up", "data-aos-delay": "200" }
            : {})}
        >
          At eequate, we specialize in crafting innovative web and mobile
          applications, marketing technology, AI, and cloud solutions. All with
          a strong focus on user experience. We turn your vision into intuitive,
          seamless, and scalable digital products.
        </p>
        <div
          className="w-full flex justify-center"
          {...(ANIMATION
            ? { "data-aos": "fade-up", "data-aos-delay": "400" }
            : {})}
        >
          <Button
            className="h-[48px] sm:h-[56px] border-[1.5px] border-[#1F2541] flex items-center justify-between px-5 sm:px-6 py-3 sm:py-[22px] leading-[22.2px] rounded-full text-white text-base sm:text-lg font-semibold
            bg-gradient-to-r from-black to-[#1A1A2E] hover:from-[#1A1A2E] hover:to-black transition-all duration-300 shadow-lg"
          >
            Schedule Call
            <span>
              <ArrowRight className="ml-2 w-5 sm:w-[24px] h-5 sm:h-[24px]" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
