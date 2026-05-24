"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectCard } from "./project-card";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Cosmic: AI Chat",
    description:
      "Chat interface powered by GPT-3 via Magic Loops endpoints. Built with Next.js 15 and Zustand, featuring a clean minimalist UI for distraction-free AI conversations.",
    tags: ["React", "TypeScript", "Tailwind"],
    year: "2025",
    imgSrc: "/images/projects/cosmic/Captura%20de%20pantalla%202026-05-24%20012207.png",
    link: "https://cosmic-ai-chat.vercel.app",
    githubLink: "https://github.com/alejandroacd/cosmic-ai-chat",
  },
    {
    title: "Quizzer",
    description:
      "Trivia app with ~900 questions across Sports, History, Geography, and Arts. Pick your question count, get instant feedback, and challenge friends via WhatsApp sharing.",
    tags: ["React", "TypeScript", "Tailwind"],
    year: "2024",
    imgSrc: "/images/projects/quizzer/Captura%20de%20pantalla%202026-05-24%20015331.png",
    link: "https://quizzer-v2.vercel.app",
    githubLink: "https://github.com/alejandroacd/quizzer-v2",
  },
    {
    title: "360s Feedback Report Validator",
    description:
      "Internal validation tool for 360-degree feedback report results, used to cross-check assessment data integrity within a larger organizational platform.",
    tags: ["React", "TypeScript", "Tailwind"],
    year: "2024",
    imgSrc: "/images/projects/360s/Captura%20de%20pantalla%202026-05-24%20013636.png",
    link: "https://360-combinations.vercel.app/",
    githubLink: "https://github.com/alejandroacd/360-combinations",
  },
  {
    title: "Spotify 00's Global Hits Tracker",
    description:
      "Browse a curated 2000s global hits playlist via the Spotify Web API. Sign in to save favorite tracks to your library, with an interactive carousel and optimistic UI.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    year: "2025",
    imgSrc: "/images/projects/spotify/Captura%20de%20pantalla%202026-05-24%20012436.png",
    link: "https://00s-global-hits.netlify.app/",
    githubLink: "https://github.com/alejandroacd/spotify-global-hits",
  },
  {
    title: "LeaderGENE™ Profiles Comparison Tool",
    description:
      "Assessment viewer for comparing LeaderGENE™ candidate profiles across seven psychometric traits, supporting both modern Quotient-based and legacy trait name formats.",
    tags: ["React", "TypeScript", "Tailwind"],
    year: "2024",
    imgSrc: "/images/projects/leadergene/Captura%20de%20pantalla%202026-05-24%20013522.png",
    link: "https://leadergene-profiles-comparison.vercel.app/",
    githubLink: "https://github.com/alejandroacd/leadergene-profiles-comparison",
  },

  {
    title: "Evaporada Portfolio",
    description:
      "Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS — deployed on Vercel with modern design.",
    tags: ["Next.js", "GSAP", "Tailwind"],
    year: "2025",
    imgSrc: "/images/projects/portfolio/Captura%20de%20pantalla%202026-05-24%20013853.png",
    link: "https://evaporada.vercel.app/",
    githubLink: "https://github.com/alejandroacd/evaporada",
  }
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        scale: 0.97,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative z-10 px-8 md:px-16"
    >
      <p className="section-label mb-12">Selected Work</p>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
