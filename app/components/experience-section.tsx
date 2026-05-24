"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Front-End Architect",
    company: "Above + Beyond Management Consulting",
    type: "Full-time",
    period: "Jul. 2025 – Present",
    location: "Buenos Aires · Remote",
    description:
      "Leading frontend architecture for enterprise clients. Building AI-powered interfaces, design systems, and high-performance web applications at scale.",
  },
  {
    role: "Frontend Developer",
    company: "Novakorp",
    type: "Full-time",
    period: "Jul. 2023 – Present",
    location: "Buenos Aires Province, Argentina · Remote",
    description:
      "Developing high-performance frontend components, managing complex application state, and handling API integrations within a collaborative engineering team. Stack includes Redux.js, Tailwind CSS, and more.",
  },
  {
    role: "Freelance Web Developer",
    company: "Workana",
    type: "Self-employed",
    period: "Mar. 2021 – Dec. 2024",
    location: "",
    description:
      "Delivered custom web applications, e-commerce sites, and SPAs for clients across various industries. Full project lifecycle from requirements to deployment.",
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative z-10 px-8 py-24 md:px-16"
    >
      <p className="section-label mb-12">Experience</p>

      <div className="relative max-w-2xl">
        {/* Vertical line */}
        <div className="timeline-line absolute left-[7px] top-2 bottom-2 w-px bg-zinc-800" />

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.period} className="timeline-item relative pl-8">
              {/* Dot */}
              <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-zinc-600 bg-[#080808]" />

              <h3 className="text-lg font-bold text-zinc-100">{exp.role}</h3>
              <p className="mt-0.5 text-sm text-zinc-400">
                {exp.company} · {exp.type}
              </p>
              <span className="mt-1 block font-mono text-xs text-zinc-600">
                {exp.period}
                {exp.location ? ` · ${exp.location}` : ""}
              </span>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
