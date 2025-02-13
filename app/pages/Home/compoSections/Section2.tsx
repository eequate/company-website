"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ANIMATION = process.env.NEXT_PUBLIC_ANIMATION === "true";

// Helper function to conditionally add AOS attributes
const getAosProps = (animation: string, delay: number) =>
    ANIMATION ? { "data-aos": animation, "data-aos-delay": delay } : {};

export default function Section2() {
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
        <section className="container mx-auto xl:px-[48px] px-[20px] lg:py-[60px] py-[20px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-[73px] gap-10 items-start">
                {/* Left Side Text */}
                <div className="flex flex-col lg:gap-[48px] gap-[32px]">
                    <div className="flex flex-col">
                        <h1
                            {...getAosProps("fade-up", 200)}
                            className="text-[24px] md:text-[48px] font-semibold md:leading-[62px] leading-[36px]"
                        >
                            Turning <span className="text-[#005EFF]">Ideas</span> into Engaging <br />
                            <span className="text-[#005EFF]">User Experiences</span> That <br />
                            Deliver Results
                        </h1>
                        <p
                            {...getAosProps("fade-up", 400)}
                            className="mt-4 text-[#6F849E] font-medium lg:text-[16px] leading-[28px]"
                        >
                            We put user experience at the heart of every project. Our innovative solutions
                            are crafted to captivate users and elevate satisfaction.
                        </p>
                    </div>

                    <Card
                        {...getAosProps("fade-up", 600)}
                        className="relative bg-black text-white rounded-2xl overflow-hidden bg-[url('/assets/images/bg1.svg')] bg-cover bg-center"
                    >
                        {/* Black overlay */}
                        <div className="absolute inset-0 bg-black/60"></div>

                        <CardContent className="relative flex flex-col p-[48px] gap-[27px]">
                            <h3 className="text-[32px] leading-[41.6px] font-semibold">User-Focused</h3>
                            <p className="text-[19px] leading-[32px] font-medium text-[#D5DAE2]">
                                We create interfaces that resonate with users, ensuring their needs are met while considering accessibility and inclusivity.
                            </p>
                            <Button className="h-[48px] max-w-max sm:h-[56px] border-[1.5px] border-[#1F2541] flex items-center justify-between px-5 sm:px-6 py-3 sm:py-[22px] leading-[22.2px] rounded-full text-white text-base sm:text-lg font-semibold bg-gradient-to-r from-black to-[#1A1A2E] hover:from-[#1A1A2E] hover:to-black transition duration-300 ease-out shadow-lg">
                                Read More
                                <span>
                                    <ArrowRight className="ml-2 w-5 sm:w-[24px] h-5 sm:h-[24px]" />
                                </span>
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Side Cards */}
                <div className="grid grid-cols-1 gap-6 h-full">
                    <Card
                        {...getAosProps("fade-up", 800)}
                        className="relative bg-black text-white rounded-2xl overflow-hidden bg-[url('/assets/images/bg2.svg')] bg-cover bg-center"
                    >
                        {/* Black overlay */}
                        <div className="absolute inset-0 bg-black/40"></div>

                        <CardContent className="relative flex flex-col p-[48px] gap-[27px]">
                            <h3 className="text-[32px] leading-[41.6px] font-semibold">Innovative Solutions</h3>
                            <p className="text-[19px] leading-[32px] font-medium text-[#D5DAE2]">
                                Utilising cutting-edge AI technology to enhance user interactions and drive business growth effectively.
                            </p>
                            <Button className="h-[48px] max-w-max sm:h-[56px] border-[1.5px] border-[#1F2541] flex items-center justify-between px-5 sm:px-6 py-3 sm:py-[22px] leading-[22.2px] rounded-full text-white text-base sm:text-lg font-semibold bg-gradient-to-r from-black to-[#1A1A2E] hover:from-[#1A1A2E] hover:to-black transition duration-300 ease-out shadow-lg">
                                Read More
                                <span>
                                    <ArrowRight className="ml-2 w-5 sm:w-[24px] h-5 sm:h-[24px]" />
                                </span>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
