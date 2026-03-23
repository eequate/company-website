"use client";

import JobCard from "./components/CarrerCard";
import FAQSection from "../pages/Home/compoSections/Faq";

export default function FeatureGrid() {
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

  return (
    <div className="md:px-[48px] px-0">
      <div className="lg:px-0 lg:pb-[30px] md:px-0 sm:px-[20px] pb-[20px] px-[20px] pt-[30px]">
        <h1 className="text-[#006AFF] md:text-[72px] text-[62px] md:leading-[90px] leading-[72px] font-semibold text-center pb-[60px]">
          About Eequate
        </h1>
      </div>
      {/* Our Story */}
      <div className="md:px-[48px] md:py-[60px] px-[20px] py-[20px] lg:mt-0 mt-10 flex flex-col gap-[48px]">
        <h2 className="md:text-[48px] sm:text-[32px] text-[28px] font-semibold md:leading-[62px] sm:leading-[48px] leading-[40px] text-center">
          Our <span className="text-[#006AFF]">Story</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          <div className="flex flex-col gap-6">
            <p className="text-[#6F849E] font-medium text-[16px] leading-[28px]">
              Eequate was founded with a clear purpose: to help businesses
              navigate the digital landscape with confidence. Based in
              Australia and operating across Sydney, we partner with
              organisations of all sizes to deliver technology solutions that
              genuinely make a difference.
            </p>
            <p className="text-[#6F849E] font-medium text-[16px] leading-[28px]">
              We believe that great technology starts with understanding
              people. Every project we take on begins with listening — to your
              goals, your users, and the challenges you face. From there, we
              craft solutions that are not just technically excellent, but
              intuitive and meaningful.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[#6F849E] font-medium text-[16px] leading-[28px]">
              Our team brings together expertise in web and mobile
              development, AI, cloud infrastructure, UX design, and digital
              marketing. We work as an extension of your team, staying
              involved from initial concept through to launch and beyond.
            </p>
            <p className="text-[#6F849E] font-medium text-[16px] leading-[28px]">
              What sets us apart is our commitment to building lasting
              partnerships. We measure our success not just by the products we
              deliver, but by the growth and impact we help our clients
              achieve.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="md:px-[48px] px-5">
        <div
          className="my-[60px] text-center flex flex-col md:gap-[48px] gap-5 md:p-[48px] p-5 rounded-[30px]"
          style={{
            background: "linear-gradient(90deg, #1F2541 0%, #000000 45.72%)",
          }}
        >
          <h1 className="md:text-[48px] text-[32px] md:leading-[62px] leading-[50px] font-semibold text-[#FFFFFF]">
            Our <span className="text-[#006AFF]">Values</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            <div className="flex flex-col gap-4 text-left md:text-center">
              <h3 className="text-[24px] font-semibold text-white">User-First Thinking</h3>
              <p className="font-medium leading-[28px] text-[16px] text-[#D5DAE2]">
                Every decision we make is guided by the end user. We design
                and build with empathy, ensuring our solutions are accessible,
                intuitive, and delightful to use.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-left md:text-center">
              <h3 className="text-[24px] font-semibold text-white">Innovation with Purpose</h3>
              <p className="font-medium leading-[28px] text-[16px] text-[#D5DAE2]">
                We embrace emerging technologies not for their own sake, but
                to solve real problems. AI, cloud, and modern frameworks are
                tools we wield to create tangible business outcomes.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-left md:text-center">
              <h3 className="text-[24px] font-semibold text-white">Transparent Partnership</h3>
              <p className="font-medium leading-[28px] text-[16px] text-[#D5DAE2]">
                We believe in open communication and honest collaboration.
                Our clients always know where their project stands, and we
                work together to navigate challenges and celebrate wins.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="flex flex-col gap-[48px] md:py-[60px] py-[20px] md:px-[48px] px-5">
        <div className="text-center flex flex-col gap-4">
          <h1 className="md:text-[48px] text-[32px] font-semibold md:leading-[62px] leading-[42px]">
            How We <span className="text-[#006AFF]">Work</span>
          </h1>
          <h2 className="text-[#6F849E] text-[16px] leading-[28px] font-medium max-w-[800px] mx-auto">
            From discovery to delivery, our process is built around
            collaboration and clarity. We keep things simple so you can focus
            on what matters — growing your business.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-3 text-center">
            <div className="text-[#006AFF] text-[48px] font-bold">01</div>
            <h3 className="text-[20px] font-semibold text-[#1F2541]">Discover</h3>
            <p className="text-[#6F849E] text-[14px] leading-[24px]">
              We learn about your business, users, and goals to define the
              right strategy.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <div className="text-[#006AFF] text-[48px] font-bold">02</div>
            <h3 className="text-[20px] font-semibold text-[#1F2541]">Design</h3>
            <p className="text-[#6F849E] text-[14px] leading-[24px]">
              We create wireframes, prototypes, and visual designs that bring
              your vision to life.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <div className="text-[#006AFF] text-[48px] font-bold">03</div>
            <h3 className="text-[20px] font-semibold text-[#1F2541]">Develop</h3>
            <p className="text-[#6F849E] text-[14px] leading-[24px]">
              Our engineers build scalable, performant solutions using modern
              technologies.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <div className="text-[#006AFF] text-[48px] font-bold">04</div>
            <h3 className="text-[20px] font-semibold text-[#1F2541]">Deliver & Support</h3>
            <p className="text-[#6F849E] text-[14px] leading-[24px]">
              We launch, monitor, and continuously improve to ensure lasting
              success.
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-fullmd:py-[60px] px-[20px] py-[20px] md:px-[48px]"
        id="careers"
      >
        <div
          className="md:p-[48px] p-[20px] rounded-[30px] flex flex-col md:gap-[72px] gap-10 text-center"
          style={{
            background: "linear-gradient(90deg, #1F2541 0%, #000000 45.72%)",
          }}
        >
          {/* Heading Section */}
          <div className="flex flex-col items-center">
            <h1 className="md:text-[48px] text-[28px] font-semibold md:leading-[62px] leading-[48px] text-white">
              Join the <span className="text-[#006AFF]">Eequate</span> Team
            </h1>
            <h2 className="text-[#D5DAE2] md:text-[24px] text-[18px] md:leading-[40px] leading-[24px] font-medium ">
              We’re on the lookout for passionate innovators and creative
              thinkers to help shape the future of technology. Explore our
              exciting career openings and take the next step in your
              professional journey with Eequate!
            </h2>
          </div>

          {/* Job Cards Section */}
          <div className="flex flex-wrap gap-[54px] justify-center">
            {careerData.map((job) => (
              <JobCard
                key={job.id}
                title={job.title}
                description={job.description}
              />
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
