'use client';

import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {

    heading: string;
    description: string;

}

const ChooseUsCard: React.FC<TestimonialCardProps> = ({
    heading,
    description,

}) => {
    return (
        <Card
            className="relative  max-w-[409px] h-[325px] p-[48px] flex flex-col gap-[27px] text-white rounded-[30px]  overflow-hidden"
        >
            {/* Background Image */}
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(/assets/images/chooseUs.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            ></div>


            {/* Gradient Layer */}
            <div className="absolute inset-0 bg-white opacity-[90%]"
                style={{
                    background: 'linear-gradient(90deg, #1F2541 0%, #000000 45.72%)'
                }}
            ></div>

            <CardContent className="relative flex flex-col gap-[27px] h-full  p-0 z-10">

                <div className='flex flex-col h-full justify-between'>
                    <h2 className="text-[32px] leading-[41px] font-semibold">{heading}</h2>
                    <p className="text-[19px] leading-[32px] font-medium text-[#D5DAE2]">{description}</p>
                </div>
            </CardContent>

        </Card>
    );
};

export default ChooseUsCard;
