'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import ProfileCard from './components/Card';
import TestimonialCard from './components/FeedBackCard';
import JobCard from './components/CarrerCard';
import FAQSection from '../pages/Home/compoSections/Faq';
import { useEffect, useRef } from 'react';



export default function FeatureGrid() {


    const persons = [
        {
            imageSrc: "/assets/images/person1.svg",
            name: "Jhon Doe",
            title: "CEO"
        },
        {
            imageSrc: "/assets/images/person2.svg",
            name: "Jane Smith",
            title: "CEO"
        },
        {
            imageSrc: "/assets/images/person3.svg",
            name: "Alex Johnson",
            title: "CTO"
        },
        {
            imageSrc: "/assets/images/person4.svg",
            name: "Emily Brown",
            title: "COO"
        },
        {
            imageSrc: "/assets/images/person5.svg",
            name: "Michael Lee",
            title: "CMO"
        },
        {
            imageSrc: "/assets/images/person6.svg",
            name: "Olivia Wilson",
            title: "CIO"
        }
    ]

    const testimonials = [
        {
            name: 'Charile Monger',
            title: 'CEO',
            company: 'Soshable',
            testimonial: 'This product transformed our workflow efficiency.',
            imageUrl: '/assets/images/person1.jpeg',
            heading: 'Outstanding Experience',
            description: 'Utilizing artificial intelligence to streamline, refine, and elevate user experiences for more intelligent outcomes.',
            bgImage: "/assets/images/testimonial.png"

        },
        {
            name: 'Emily Chen',
            title: 'Chief Innovation Officer',
            company: 'Techroot',
            testimonial: 'An amazing experience with top-tier support!',
            imageUrl: '/assets/images/person2.jpeg',
            heading: 'Innovative Solutions',
            description: 'Leveraging cutting-edge technology to enhance productivity and drive success.',
            bgImage: "/assets/images/testimonial.png"
        },
        {
            name: 'Alex Rodriguez',
            title: 'CTO',
            company: 'TechGenius',
            testimonial: 'User-friendly and feature-rich. Highly recommend!',
            imageUrl: '/assets/images/person3.jpeg',
            heading: 'Dynamic Development',
            description: 'Integrating innovative strategies to fuel growth and drive sustainable progress.',
            bgImage: "/assets/images/testimonial.png"
        },

    ];


    const careerData = [
        {
            id: "Senior UX Designer",
            title: "Senior UX Designer",
            description:
                "Craft intuitive and engaging user experiences that redefine industry standards. Collaborate with cross-functional teams to create seamless designs for web and mobile platforms.",
        },
        {
            id: "Full-Stack Developer",
            title: "Full-Stack Developer",
            description:
                "Build and maintain scalable applications using the latest technologies. Work on both front-end and back-end development to deliver top-notch solutions.",
        },
        {
            id: "AI Engineer",
            title: "AI Engineer",
            description:
                "Develop innovative AI-powered solutions to solve real-world problems. Leverage machine learning algorithms to drive efficiency and improve user experiences.",
        },
        {
            id: "Marketing Specialist",
            title: "Marketing Specialist",
            description:
                "Create and implement marketing strategies that elevate our brand and connect with target audiences. Use data-driven insights to optimize campaigns for maximum impact.",
        },
        {
            id: "Project Manager",
            title: "Project Manager",
            description:
                "Lead and manage diverse teams to deliver projects on time and within budget. Ensure seamless communication and alignment across all stakeholders.",
        },
        {
            id: "Customer Success Manager",
            title: "Customer Success Manager",
            description:
                "Build strong relationships with clients and ensure their success through our services. Act as a trusted advisor and provide tailored solutions to meet their needs.",
        },
    ];

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;


        const scrollStep = 2; // Adjust scrolling speed
        const intervalTime = 50; // Adjust interval speed

        const scrollInterval = setInterval(() => {
            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                scrollContainer.scrollLeft = 0; // Reset scroll when reaching the end
            } else {
                scrollContainer.scrollLeft += scrollStep;
            }
        }, intervalTime);

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div>
            <h1 className='text-[#006AFF] md:text-[72px] text-[62px] md:leading-[90px] leading-[72px] font-semibold text-center py-[48px]'>About eequate</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-[20px] md:p-[48px] w-full mx-auto lg:px-[48px] px-[20px]">
                {/* Left Column */}
                <div className="flex flex-col md:gap-[54px] gap-[20px]">
                    <Card className=" relative bg-black text-white rounded-[30px] h-[200px] overflow-hidden bg-[url('/assets/images/a1.svg')] bg-cover bg-center">
                        {/* Black overlay */}
                        <div className="absolute inset-0 bg-black/50"></div>
                        <CardContent className="relative flex flex-col justify-between h-full p-[24px] gap-[27px]">
                            <h3 className="text-[32px] leading-[41.6px] font-semibold">1M+</h3>
                            <p className=" text-[19px] leading-[32px] font-medium text-[#D5DAE2]">
                                Lines of code written
                            </p>
                        </CardContent>
                    </Card>

                    {/* Image with black overlay */}
                    <div className="relative w-full md:h-[400px] h-[200px] rounded-[30px] overflow-hidden">
                        <Image
                            src="/assets/images/a2.svg"
                            layout="fill"
                            objectFit="cover"
                            alt="Meeting"
                        />
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>
                </div>

                {/* Center Column */}
                <div className="relative w-full md:h-full h-[200px] rounded-[30px] overflow-hidden">
                    <Image
                        src="/assets/images/a3.svg"
                        layout="fill"
                        objectFit="cover"
                        alt="Office Walk"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col md:gap-[54px] gap-[20px]">
                    <div className="relative w-full md:h-[400px] h-[200px] rounded-[30px] overflow-hidden">
                        <Image
                            src="/assets/images/a4.svg"
                            layout="fill"
                            objectFit="cover"
                            alt="Team Discussion"
                        />
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>

                    <Card className="relative bg-black text-white rounded-[30px] h-[200px] overflow-hidden bg-[url('/assets/images/a5.svg')] bg-cover bg-center">
                        {/* Black overlay */}
                        <div className="absolute inset-0 bg-black/50"></div>
                        <CardContent className="relative flex flex-col justify-between h-full p-[24px] gap-[27px]">
                            <h3 className="text-[32px] leading-[41.6px] font-semibold">1M+</h3>
                            <p className=" text-[19px] leading-[32px] font-medium text-[#D5DAE2]">
                                Lines of code written
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className='md:px-[48px] md:py-[60px] px-[20px] py-[20px] lg:mt-0 mt-10 flex flex-col gap-[48px]'>
                <h2 className=' md:text-[48px] sm:text-[32px] text-[28px] font-semibold md:leading-[62px] sm:leading-[48px] leading-[40px] text-center'>Bringing <span className='text-[#006AFF]'>expertise</span> to every interaction</h2>
                <div className="flex flex-wrap w-full gap-[32px] justify-center">
                    {persons.map((person, index) => (
                        <ProfileCard key={index} imageSrc={person.imageSrc} name={person.name} title={person.title} />
                    ))}
                </div>
            </div>

            <div className="md:px-[48px] px-5">
                <div
                    className="my-[60px] text-center flex flex-col md:gap-[48px] gap-5 md:p-[48px] p-5 rounded-[30px]"
                    style={{ background: "linear-gradient(90deg, #1F2541 0%, #000000 45.72%)" }}
                >
                    <h1 className="md:text-[48px] text-[32px] md:leading-[62px] leading-[50px] font-semibold text-[#FFFFFF]">
                        Message from <span className="text-[#006AFF]">CEO</span>
                    </h1>
                    <h2 className="font-medium mdLleading-[40px] leading-[32px] md:text-[24px] text-[16px] text-[#FFFFFF]">
                        Our mission is to build impactful, user-centered digital solutions that empower businesses to thrive while making a positive difference. We envision a future where technology and sustainability go hand in hand, creating value for our clients, their users, and the world at large. Through continuous innovation and a commitment to responsible practices, we aim to lead in crafting experiences that inspire growth and foster a sustainable tomorrow.
                    </h2>
                </div>
            </div>

            <div className='flex flex-col gap-[48px] md:py-[60px] py-[20px] md:px-[48px] px-5'>
                <div className='text-center flex flex-col'>
                    <h1 className='md:text-[48px] text-[32px] font-semibold md:leading-[62px] leading-[42px]'>What our <span className='text-[#006AFF]'>customers</span> says about us</h1>
                    <h2 className='text-[#6F849E] text-[15px] md:mt-0 mt-4 leading-[28px] font-medium'>Our clients appreciate how we blend cutting-edge technology with a focus on user experience to deliver solutions that truly resonate.</h2>
                </div>
                <div ref={scrollRef} className='testimonials-slider flex flex-row  overflow-hidden  overflow-x-auto space-x-[10px] scrollbar-hide '>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>

            <div className="w-fullmd:py-[60px] px-[20px] py-[20px] md:px-[48px]" id='careers'>
                <div
                    className="md:p-[48px] p-[20px] rounded-[30px] flex flex-col md:gap-[72px] gap-10 text-center"
                    style={{ background: "linear-gradient(90deg, #1F2541 0%, #000000 45.72%)" }}
                >
                    {/* Heading Section */}
                    <div className="flex flex-col items-center">
                        <h1 className="md:text-[48px] text-[28px] font-semibold md:leading-[62px] leading-[48px] text-white">
                            Join the <span className="text-[#006AFF]">eequate</span> Team
                        </h1>
                        <h2 className="text-[#D5DAE2] md:text-[24px] text-[18px] md:leading-[40px] leading-[24px] font-medium ">
                            We’re on the lookout for passionate innovators and creative thinkers to help shape the future of technology. Explore our exciting career openings and take the next step in your professional journey with eequate!
                        </h2>
                    </div>

                    {/* Job Cards Section */}
                    <div className="flex flex-wrap gap-[54px] justify-center">
                        {careerData.map((job) => (
                            <JobCard key={job.id} title={job.title} description={job.description} />
                        ))}
                    </div>
                </div>
            </div>



            <div>
                <FAQSection />
            </div>
        </div>
    );
}
