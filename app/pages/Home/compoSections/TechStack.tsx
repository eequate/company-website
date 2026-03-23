"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ANIMATION = process.env.NEXT_PUBLIC_ANIMATION === "true";

const getAosProps = (animation: string, delay: number) =>
  ANIMATION ? { "data-aos": animation, "data-aos-delay": delay } : {};

interface TechItem {
  name: string;
  category: string;
}

const techItems: TechItem[] = [
  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Go", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "PHP", category: "Backend" },
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
  // Database & Data
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "DynamoDB", category: "Database" },
  { name: "Kafka", category: "Data & Streaming" },
  { name: "Elasticsearch", category: "Data & Streaming" },
  { name: "ElastiCache", category: "Data & Streaming" },
  { name: "Pinecone", category: "Vector Store" },
  // Cloud & DevOps
  { name: "AWS", category: "Cloud & DevOps" },
  { name: "Google Cloud", category: "Cloud & DevOps" },
  { name: "Docker", category: "Cloud & DevOps" },
  { name: "Kubernetes", category: "Cloud & DevOps" },
  { name: "Vercel", category: "Cloud & DevOps" },
  // Observability
  { name: "Prometheus", category: "Observability" },
  { name: "Grafana", category: "Observability" },
  // AI & ML
  { name: "OpenAI", category: "AI & ML" },
  { name: "Claude AI", category: "AI & ML" },
  { name: "LangChain", category: "AI & ML" },
  { name: "Hugging Face", category: "AI & ML" },
];

export default function TechStack() {
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
    <section className="container mx-auto xl:px-[48px] px-0 md:px-[20px] lg:py-[60px] py-[20px]">
      <div
        className="mx-auto text-center rounded-none md:rounded-[30px] lg:p-[48px] p-5 md:p-[20px]"
        style={{
          background: "linear-gradient(90deg, #1F2541 0%, #000000 45.72%)",
        }}
      >
        <h2
          className="md:text-[48px] sm:text-[28px] text-[24px] md:leading-[62px] leading-[38px] font-semibold text-center text-white"
          {...getAosProps("fade-up", 0)}
        >
          Built With the <span className="text-[#006AFF]">Best Tools</span>
        </h2>

        <p
          className="text-center md:text-[24px] sm:text-[18px] text-[14px] md:leading-[40px] leading-[28px] font-medium mt-3 text-[#D5DAE2]"
          {...getAosProps("fade-up", 100)}
        >
          We pick the right technology for each project — not the trendiest.
          Here&apos;s what we reach for most.
        </p>

        <div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 mt-10"
          {...getAosProps("fade-up", 200)}
        >
          {techItems.map((item, index) => (
            <div
              key={item.name}
              className="p-4 flex flex-col items-center gap-1 border-[1px] border-[#ffffff10] bg-[#ffffff06] rounded-[16px] hover:border-[#ffffff20] hover:scale-105 transition-all duration-300 cursor-default"
              {...getAosProps("fade-up", 200 + index * 50)}
            >
              <span className="text-white font-bold text-[16px] md:text-[18px]">
                {item.name}
              </span>
              <span className="text-[#6F849E] text-[12px] md:text-[13px]">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
