import React from 'react'
import HeroSection from './compoSections/Hero'
import Marquee from './compoSections/Marquee'
import Section2 from './compoSections/Section2'
import TypoSection from './compoSections/TypoSection'
import ServicesSection from './compoSections/ServicesSection'
import ExperienceSection from './compoSections/ExperienceSection'
import PurposeSection from './compoSections/PurposeSection'
import FAQSection from './compoSections/Faq'
import CTABanner from './compoSections/Banner'




export default function HomePage() {
    return (
        <div>
            <div className="lg:p-[48px] p-[20px]">
                <HeroSection />
            </div>
            {/* <SplineAnimation /> */}
            <div className="lg:px-[48px] p-[10px]">
                <Marquee />
            </div>
            <div>
                <Section2 />
            </div>
            <div>
                <TypoSection
                    heading="Crafting Tomorrow’s Digital Experiences, Today"
                    paragraph="We are a forward-thinking digital solutions company, driven by creativity and innovation. Our mission is to empower businesses by delivering tailored strategies and intuitive designs that resonate with users. With a focus on excellence and a passion for crafting impactful experiences, we partner with you to unlock new growth opportunities and elevate your brand in a digital-first world."
                />
            </div>
            <div className="lg:px-[48px] p-[20px]">
                <ServicesSection />
            </div>

            <div>
                <TypoSection
                    heading="Shaping the Future with Innovation and Responsibility"
                    paragraph="“Our mission is to build impactful, user-centered digital solutions that empower businesses to thrive while making a positive difference. We envision a future where technology and sustainability go hand in hand, creating value for our clients, their users, and the world at large. Through continuous innovation and a commitment to responsible practices, we aim to lead in crafting experiences that inspire growth and foster a sustainable tomorrow.”"
                />
            </div>
            <div>
                <ExperienceSection />
            </div>
            <div className="lg:px-[48px] p-[20px] lg:py-[60px] py-[40px]">
                <PurposeSection />
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
