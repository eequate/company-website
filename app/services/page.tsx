import { Card, CardContent } from '@/components/ui/card'

import React from 'react'
import ServiceCard from '../pages/Home/compoSections/FeatureCard'
import ChooseUsCard from './components/ChooseUsCard';
import FAQSection from '../pages/Home/compoSections/Faq';
import CTABanner from '../pages/Home/compoSections/Banner';


export default function page() {
    const services = [
        {
            title: "Custom Web Development",
            description:
                "We create responsive, user-friendly websites that not only look stunning but also drive engagement. From corporate websites to e-commerce platforms, we ensure seamless functionality and top-tier performance.",
            image: "/assets/images/shot1.svg",
        },
        {
            title: "Mobile App Development",
            description:
                "We design and develop intuitive mobile applications tailored to your needs. Whether it’s iOS or Android, our apps provide exceptional user experiences and ensure high performance.",
            image: "/assets/images/shot2.svg",
        },
        {
            title: "AI-Powered Solutions",
            description:
                "Transform your business processes with AI-driven solutions. From predictive analytics to chatbots, our expertise in artificial intelligence helps you stay ahead of the competition.",
            image: "/assets/images/shot3.svg",
        },
        {
            title: "UX/UI Design",
            description:
                "We craft intuitive, user-centered designs that captivate your audience and drive engagement. From wireframes to prototypes, we ensure every interaction leaves a lasting impression.",
            image: "/assets/images/shot3.svg",
        },
        {
            title: "Digital Marketing",
            description:
                "Reach the right audience with our data-driven digital marketing strategies. From SEO to social media campaigns, we optimize your brand presence for maximum impact.",
            image: "/assets/images/shot2.svg",
        },
        {
            title: "Cloud Solutions",
            description:
                "Migrate to the cloud with confidence. Our cloud solutions are designed for flexibility, security, and scalability, helping your business adapt to future demands effortlessly.",
            image: "/assets/images/shot1.svg",
        },
    ];


    const chooseUsData = [
        {
            heading: "Tailored Solutions",
            description: "We take the time to understand your business and create customized strategies.",
        },
        {
            heading: "Innovative Approach",
            description: "Stay ahead with cutting-edge technologies and methodologies.",
        },
        {
            heading: "End-to-End Support",
            description: "From ideation to implementation, we’re with you every step of the way.",
        },
    ];
    return (
        <div className='md:px-[48px] px-0'>
            <div>
                <h1 className='text-[#006AFF] text-[72px] leading-[90px] font-semibold text-center px-[48px] py-[48px]'>Services</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-[54px] gap-[20px]  md:p-[48px] w-full mx-auto md:px-0 px-[20px]">
                    {/* Left Column */}
                    <div className="flex flex-col lg:gap-[54px] gap-[20px]">
                        <Card className=" relative bg-black text-white rounded-[30px] lg:h-[200px] h-[240px] overflow-hidden bg-[url('/assets/images/card1.svg')] bg-cover bg-center">
                            {/* Black overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>
                            <CardContent className="relative flex flex-col justify-between h-full p-[24px] gap-[27px]">
                                <h3 className="xl:text-[72px] text-[60px] leading-[41.6px] font-semibold">100M+</h3>
                                <p className=" text-[19px] leading-[32px] font-medium text-[#D5DAE2]">
                                    Satisfied Clients
                                </p>
                            </CardContent>
                        </Card>

                        {/* Image with black overlay */}
                        <div className="relative w-full lg:h-[400px] h-[240px] rounded-[30px] overflow-hidden">
                            <Card className=" relative bg-black text-white rounded-[30px] lg:h-[400px] h-[240px] overflow-hidden bg-[url('/assets/images/card2.svg')] bg-cover bg-center">
                                {/* Black overlay */}
                                <div className="absolute inset-0 bg-black/50"></div>
                                <CardContent className="relative flex flex-col justify-between h-full p-[24px] gap-[27px]">
                                    <h3 className="xl:text-[72px] text-[60px] leading-[41.6px] font-semibold">20+</h3>
                                    <p className=" text-[19px] leading-[32px] font-medium text-[#D5DAE2]">
                                        Industries Served
                                    </p>
                                </CardContent>
                            </Card>
                            {/* <div className="absolute inset-0 bg-black/50"></div> */}
                        </div>
                    </div>

                    {/* Center Column */}
                    <div className="relative w-full lg:h-full h-[240px] rounded-[30px] overflow-hidden">
                        <Card className=" relative bg-black text-white rounded-[30px] h-full overflow-hidden bg-[url('/assets/images/card3.svg')] bg-cover bg-center">
                            {/* Black overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>
                            <CardContent className="relative flex flex-col justify-between h-full p-0">
                                <h3 className="xl:text-[63px] lg:text-[48px] text-[36px] md:leading-[79.38px] py-4 leading-[40px] xl:px-[24px] px-4 font-semibold">Crafting tailored strategies to empower businesses and drive success.</h3>

                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col lg:gap-[54px] gap-[20px]">
                        <div className="relative w-full lg:h-[400px] h-[240px] rounded-[30px] overflow-hidden">
                            <Card className=" relative bg-black text-white rounded-[30px] h-[400px] overflow-hidden bg-[url('/assets/images/card4.svg')] bg-cover bg-center">
                                {/* Black overlay */}
                                <div className="absolute inset-0 bg-black/50"></div>
                                <CardContent className="relative flex flex-col justify-between h-full p-[24px] gap-[27px]">
                                    <h3 className="xl:text-[72px] text-[60px] leading-[41.6px] font-semibold">50M+</h3>
                                    <p className=" text-[19px] leading-[32px] font-medium text-[#D5DAE2]">
                                        Successful Projects Delivered.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <Card className="relative bg-black text-white rounded-[30px] lg:h-[200px] h-[240px] overflow-hidden bg-[url('/assets/images/card5.svg')] bg-cover bg-center">
                            {/* Black overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>
                            <CardContent className="relative flex flex-col justify-between h-full p-[24px] gap-[27px]">
                                <h3 className="xl:text-[72px] text-[60px] leading-[41.6px] font-semibold">3M+</h3>
                                <p className=" text-[19px] leading-[32px] font-medium text-[#D5DAE2]">
                                    years of experience in IT.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <div className='lg:px-0 lg:py-[60px]  md:px-0 sm:px-[20px] py-[40px] px-[20px]'>
                <div className=" mx-auto text-center rounded-[30px] lg:p-[48px] p-[20px]" style={{ background: "linear-gradient(90deg, #1F2541 0%, #000000 45.72%)" }}>
                    <h2 className="md:text-[48px] text-[28px] md:leading-[62px] leading-[38px] font-semibold font-bold text-center text-white">
                        Our Services
                    </h2>
                    <h3 className='md:text-[24px] text-[#D5DAE2] md:leading-[40px] leading-[26px] text-[18px] font-medium lg:mt-0 mt-8'>Our comprehensive services drive growth, engagement, and efficiency for your business.</h3>
                    <div className="flex justify-center flex-wrap gap-8 mt-10 " >
                        {services.map((service, index) => (
                            <ServiceCard key={index} image={service.image} title={service.title} description={service.description} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='text-center md:py-[60px] lg:px-[48px] py-[20px] px-[20px] flex flex-col gap-[48px]'>
                <div>
                    <h1 className='md:text-[48px] text-[32px] text-[#1F2541] leading-[62px] font-semibold'>Why Choose Us?</h1>
                    <p className='text-[#6F849E] text-[16px] leading-[28px] font-medium'>Our clients appreciate how we blend cutting-edge technology with a focus on user experience to deliver solutions that truly resonate.</p>
                </div>
                <div className='flex flex-wrap gap-[10px]  justify-center'>
                    {chooseUsData.map((item, index) => (
                        <ChooseUsCard key={index} heading={item.heading} description={item.description} />
                    ))}

                </div>
            </div>
            <div>
                <FAQSection />
            </div>
            <div>
                <CTABanner />
            </div>


        </div>
    )
}
