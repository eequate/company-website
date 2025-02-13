"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Plus, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ANIMATION = process.env.NEXT_PUBLIC_ANIMATION === "true";

const faqs = [
    {
        question: "Why are technology solutions important for my business?",
        answer:
            "Technology solutions help businesses streamline processes, enhance customer experiences, and drive growth. With our services, you can implement cutting-edge web, mobile, AI, and cloud solutions that are designed to adapt to your specific business needs.",
    },
    {
        question: "How can a mobile application improve my business?",
        answer:
            "A well-designed mobile app boosts customer engagement, enhances user experience, and provides a platform for direct communication with your audience, helping to drive brand loyalty and sales.",
    },
    {
        question: "How long does it take to build a web application?",
        answer:
            "The timeline varies depending on the complexity of the project. Our team provides a detailed project plan, ensuring a smooth and efficient development process tailored to your business goals.",
    },
    {
        question: "What is the advantage of integrating AI solutions into my business?",
        answer:
            "AI solutions can automate processes, provide valuable insights, and enhance decision-making, enabling your business to become more efficient and competitive.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        if (ANIMATION) {
            AOS.init({ duration: 500, once: true });
        }
    }, []);

    const toggleFAQ = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="flex md:flex-row flex-col gap-[90px] lg:px-20 px-5 md:py-[60px] py-[20px]">
            <div className="flex-1 md:text-left text-center flex flex-col md:gap-[48px] gap-[20px]">
                <h2 className="md:text-[48px] text-[36px] text-[#1F2541] font-semibold">The most wanted FAQs</h2>
                <p className="text-[#6F849E] text-[16px] leading-[28px] font-medium mt-2">
                    As a leader in digital innovation, we provide insightful answers to frequently asked questions
                    about our technology solutions to help you make informed decisions.
                </p>
                <div className="flex flex-col gap-[24px] md:justify-start justify-center md:items-start items-center">
                    <h2 className="text-[#1F2541] font-semibold leading-[28px] text-[16px]">Have more questions?</h2>
                    <Link href="/contactus">
                        <Button
                            variant="outline"
                            className="rounded-full px-[45px] h-[56px] py-[17px] text-[16px] max-w-max font-bold border-[1px] border-[#020407] font-[Manrope] leading-[22.4px] flex justify-center items-center"
                        >
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex-1">
                {faqs.map((faq, index) => (
                    <Card
                        key={index}
                        className="border-none md:p-[24px] p-4 flex flex-col gap-[48px] shadow-none"
                    >
                        <div
                            role="button"
                            tabIndex={0}
                            className="flex justify-between items-center cursor-pointer border-none focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                            onKeyDown={(e) => e.key === "Enter" && toggleFAQ(index)}
                        >
                            <h3 className="text-[24px] leading-[36px] font-semibold">{faq.question}</h3>
                            <div>{openIndex === index ? <Minus size={24} /> : <Plus size={24} />}</div>
                        </div>
                        {openIndex === index && (
                            <CardContent
                                className="p-0 text-[16px] leading-[28px] font-medium text-[#6F849E]"
                                data-aos={ANIMATION ? "fade-up" : undefined}
                                data-aos-duration="500"
                            >
                                {faq.answer}
                            </CardContent>
                        )}
                        <div className="border-[1px] border-black"></div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
