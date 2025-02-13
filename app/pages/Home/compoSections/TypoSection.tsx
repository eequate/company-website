'use client';

import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const ANIMATION = process.env.NEXT_PUBLIC_ANIMATION === "true";

interface TypoSectionProps {
    heading: string;
    paragraph: string;
}

// Helper function to conditionally apply AOS attributes
const getAosProps = (animation: string, delay: number) =>
    ANIMATION ? { "data-aos": animation, "data-aos-delay": delay } : {};

export default function TypoSection({ heading, paragraph }: TypoSectionProps) {
    useEffect(() => {
        if (ANIMATION) {
            AOS.init({
                duration: 1000,
                easing: "ease-out",
                once: true,
            });
        }
    }, []);

    return (
        <div className="md:py-[60px] py-[20px] lg:px-[100px] px-[20px]">
            <div className="flex flex-col gap-[48px] text-center">
                <h1
                    {...getAosProps("fade-up", 200)}
                    className="md:text-[32px] text-[26px] font-semibold md:leading-[41px] leading-[32px] text-[#1F2541]"
                >
                    {heading}
                </h1>
                <p
                    {...getAosProps("fade-up", 400)}
                    className="font-medium md:leading-[40px] leading-[30px] md:text-[24px] text-[16px] text-[#6F849E] text-center"
                >
                    {paragraph}
                </p>
            </div>
        </div>
    );
}
