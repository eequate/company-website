'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
    name: string;
    title: string;
    company: string;
    imageUrl: string;
    heading: string;
    description: string;
    bgImage: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    name,
    title,
    company,
    imageUrl,
    heading,
    description,
    bgImage,
}) => {
    return (
        <div className="w-full flex justify-center">
            <Card className="relative w-full w-[600px] md:p-12 p-6 flex flex-col gap-6 text-white rounded-[30px] overflow-hidden shadow-lg">
                {/* Background Image */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>

                {/* Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1F2541] to-black opacity-90"></div>

                {/* Content */}
                <CardContent className="relative flex flex-col gap-6 p-0 z-10">
                    <Image
                        src={imageUrl}
                        alt={`${name}, ${title} at ${company} - testimonial profile photo`}
                        width={48}
                        height={48}
                        className="rounded-lg border border-gray-700 opacity-90 w-[48px] h-[48px]"
                    />
                    <div className="flex flex-col gap-[27px]">
                        <h2 className="text-xl sm:text-2xl font-semibold">{heading}</h2>
                        <p className="text-base sm:text-lg text-[#D5DAE2]">{description}</p>
                    </div>
                </CardContent>

                {/* Footer */}
                <div className="relative flex flex-col z-10">
                    <h2 className="text-sm font-medium text-[#6F849E]">{name}</h2>
                    <h2 className="text-sm font-medium text-[#6F849E]">{title}, {company}</h2>
                </div>
            </Card>
        </div>
    );
};

export default TestimonialCard;
