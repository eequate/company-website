import React from 'react'
import HeroSection from './compoSections/Hero'
import Marquee from './compoSections/Marquee'
import Section2 from './compoSections/Section2'
import TypoSection from './compoSections/TypoSection'
import ServicesSection from './compoSections/ServicesSection'
import ExperienceSection from './compoSections/ExperienceSection'
import PurposeSection from './compoSections/PurposeSection'
import TechStack from './compoSections/TechStack'
import FAQSection from './compoSections/Faq'
import CTABanner from './compoSections/Banner'




export default function HomePage() {
    return (
        <div>
            <div className="lg:p-[48px] p-0 md:p-[20px]">
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
                    heading="Engineering + Product Thinking, Under One Roof"
                    paragraph="Most agencies give you developers. We give you a product-minded engineering team that cares about outcomes, not just output. From architecture decisions to pixel-perfect UIs, we bring senior-level thinking to every engagement."
                />
            </div>
            <div className="lg:px-[48px] px-0 md:px-[20px]">
                <ServicesSection />
            </div>

            <div>
                <TypoSection
                    heading="Startups Trust Us. Agencies Partner With Us."
                    paragraph="We've helped early-stage founders ship their first MVPs and scaled production systems for established businesses. Leading digital agencies bring us in as their engineering arm — an externally internal partnership where we deliver under their brand, on their timeline, to their standards."
                />
            </div>
            <div>
                <ExperienceSection />
            </div>
            <div className="lg:px-[48px] px-0 md:px-[20px] lg:py-[60px] py-[40px]">
                <PurposeSection />
            </div>
            <div className="lg:px-[48px] px-0 md:px-[20px]">
                <TechStack />
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
