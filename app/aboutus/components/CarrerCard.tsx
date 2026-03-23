"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface JobCardProps {
  title: string;
  description: string;
}

export default function JobCard({ title, description }: JobCardProps) {
  return (
    <Card className="relative w-full max-w-[380px] h-[380px] p-6 bg-black text-white rounded-2xl shadow-xl border-[5px] border-[#77AFFF4D] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/images/carrerBg.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Gradient Layer */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, #1F2541 0%, #000000 45.72%)",
          opacity: 0.9,
        }}
      ></div>

      {/* Content (Ensure it's above overlays) */}
      <CardContent className="relative z-10 p-0 h-full flex flex-col justify-between">
        <div className=" pt-6 flex flex-col gap-[36px] text-left">
          <h2 className="text-[20px] leading-[28px] font-normal text-[#FFFFFF]">
            {title}
          </h2>
          <p className="text-gray-300">{description}</p>
        </div>
        <a href={`mailto:hello@eequate.com?subject=${encodeURIComponent(`Job Application: ${title}`)}`}>
          <Button
            className="h-[48px] max-w-max sm:h-[56px] border-[1.5px] border-[#1F2541] flex items-center justify-between px-5 sm:px-6 py-3 sm:py-[22px] leading-[22.2px] rounded-full text-white text-base sm:text-lg font-semibold
              bg-gradient-to-r from-black to-[#1A1A2E] hover:from-[#1A1A2E] hover:to-black transition-all duration-300 shadow-lg"
          >
            Apply Now
            <span>
              <ArrowRight className="ml-2 w-5 sm:w-[24px] h-5 sm:h-[24px]" />
            </span>
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}
