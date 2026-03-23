"use client";

import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
    image: string;
    title: string;
    description: string;
}

export default function ServiceCard({ image, title, description }: ServiceCardProps) {
    return (
        <Card
            className="relative max-w-[380px] md:h-[380px] h-[320px] bg-gradient-to-b from-black to-gray-900 border-[5px] border-[#77AFFF4D] rounded-[30px] shadow-lg p-[20px] overflow-hidden card-hover cursor-pointer"
            style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            {/* Black Shade Overlay */}
            <div className="absolute inset-0 bg-black opacity-60 rounded-[30px]"></div>

            <CardContent className="relative z-10 flex flex-col items-center text-center text-white h-full justify-between p-0">
                <h3 className="text-[24px] text-[#FFFFFF] leading-[30px] font-semibold">{title}</h3>
                <p className="md:text-[20px] text-[14px] text-[#FFFFFF] md:leading-[28px] leading-[20px] font-normal">{description}</p>
            </CardContent>
        </Card>
    );
}
