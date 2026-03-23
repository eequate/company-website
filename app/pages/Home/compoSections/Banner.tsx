import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTABanner = () => {
  return (
    <div className="w-full md:py-[60px] md:px-[48px] py-[20px] px-[20px] mx-auto">
      <div
        className="relative rounded-[30px] "
        style={{
          background: "linear-gradient(90deg, #1F2541 0%, #000000 45.72%)",
          boxShadow: "0px 0px 100px 5px #1F254180",
        }}
      >
        <div
          className="relative flex items-center justify-between text-white rounded-[30px] overflow-hidden shadow-lg bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/banner.webp')",
            backgroundSize: "700px", // Set the image width to 700px
            backgroundPosition: "right center", // Align the image to the right
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Gradient Overlay */}
          <div
            className="absolute "
            style={{
              background: "linear-gradient(90deg, #1F2541 0%, #000000 45.72%)",
            }}
          ></div>

          <div className="relative flex flex-col md:gap-[48px] gap-5 md:py-[54px] py-5 md:px-[48px] px-5 md:w-1/2 w-full">
            <h2 className="md:text-[32px] text-[20px] leading-[41px] font-semibold">
              Ready to work with us?
            </h2>
            <Link href="/contact-us">
              <Button
                className="h-[48px] max-w-max sm:h-[56px] border-[1.5px] border-[#1F2541] flex items-center justify-between px-5 sm:px-6 py-3 sm:py-[22px] leading-[22.2px] rounded-full text-white text-base sm:text-lg font-semibold
              bg-gradient-to-r from-black to-[#1A1A2E] hover:from-[#1A1A2E] hover:to-black transition-all duration-300 shadow-lg"
              >
                Contact Us
                <span>
                  <ArrowRight className="ml-2 w-5 sm:w-[24px] h-5 sm:h-[24px]" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
