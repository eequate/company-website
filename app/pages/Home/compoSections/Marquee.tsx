"use client";
import React from "react";
import Image from "next/image";

const logos = [
    "/assets/images/logo1.png",
    "/assets/images/logo2.png",
    "/assets/images/logo3.png",
    "/assets/images/logo4.png",
    "/assets/images/logo5.png",
    "/assets/images/logo6.png",
];

export default function Marquee() {
    return (
        <div className="overflow-hidden md:py-[60px] py-[20px] flex flex-col lg:gap-[48px] gap-[24px]">
            <h1 className="font-semibold lg:text-[32px] md:text-[24px] lg:leading-[51px] leading-[24px] lg:px-0 px-10 text-center">
                Chosen by clients delivering solutions for millions worldwide
            </h1>
            <div className="relative w-full mt-6">
                <div className="marquee">
                    <div className="marquee-inner">
                        {[...logos, ...logos].map((logo, index) => (
                            <Image
                                key={index}
                                src={logo}
                                alt="logo"
                                width={110} // Smaller width for mobile
                                height={30} // Adjusted height
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
                    width: 100%;
                }
                .marquee-inner {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    min-width: 200%;
                    animation: marquee 15s linear infinite; /* Slower on mobile */
                }
                @keyframes marquee {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }

                @media (max-width: 768px) {
                
                    .marquee-inner {
                        animation: marquee 30s linear infinite; /* Normal speed on larger screens */
                    }

                      .marquee-container {
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                    display: flex;
                }

                .marquee {
                    display: flex;
                    flex-wrap: nowrap;
                    width: max-content;
                 
                }

                .marquee-inner {
                    display: flex;
                    align-items: center;
                    min-width: max-content; /* Ensures no resetting */
                    gap: 20px;
                }

                @keyframes marquee {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%); /* Creates continuous loop */
                    }
                }

                }
            `}</style>
        </div>
    );
}
