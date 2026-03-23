"use client";
import React from "react";
import Image from "next/image";

const logos = [
    "/assets/logo1.svg",
    "/assets/logo2.svg",
    "/assets/logo3.svg",
    "/assets/logo4.svg",
    "/assets/logo5.svg",
    "/assets/logo6.svg",
    "/assets/logo7.svg",
];

export default function Marquee() {
    return (
        <div className="overflow-hidden md:py-[60px] py-[20px] flex flex-col lg:gap-[48px] gap-[24px]">
            <h1 className="font-semibold lg:text-[32px] md:text-[24px] lg:leading-[51px] leading-[24px] lg:px-0 px-10 text-center">
                Trusted by startups, agencies, and enterprises across 20+ industries
            </h1>
            <div className="relative w-full mt-6">
                <div className="marquee">
                    <div className="marquee-inner">
                        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                            <Image
                                key={index}
                                src={logo}
                                alt="logo"
                                width={211} // Smaller width for mobile
                                height={36} // Adjusted height
                                className="h-[30px] md:h-[36px] opacity-50 mx-4 md:mx-6"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .marquee {
                    display: flex;
                    overflow: hidden;
                    white-space: nowrap;
                    position: relative;
                    width: 100vw;
                }
                .marquee-inner {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    width: max-content;
                    gap: 100px;
                    animation: marquee 55s linear infinite; /* Adjusted speed */
                }
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%); /* Move the entire width */
                    }
                }

                @media (max-width: 768px) {
                    .marquee-inner {
                        animation: marquee 30s linear infinite; /* Speed adjusted for mobile */
                    }
                    .marquee {
                        display: flex;
                        flex-wrap: nowrap;
                        width: 100%;
                    }

                    .marquee-inner {
                        display: flex;
                        align-items: center;
                        width: max-content; /* Keeps logos intact for smooth scroll */
                        gap: 20px;
                    }

                    @keyframes marquee {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-100%); /* Ensures the content moves continuously */
                        }
                    }
                }
            `}</style>
        </div>
    );
}
