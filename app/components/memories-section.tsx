"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/app/lib/profile";
import { PhotoCard } from "@/app/components/memories/photo-card";

gsap.registerPlugin(ScrollTrigger);

export function MemoriesSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".memory-card", { opacity: 0, y: 30, scale: 0.96 });
      gsap.to(".memory-card", {
        scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: { each: 0.05, from: "start" },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="memories" className="relative z-10 px-8 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="section-label mb-3">Memories</p>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Moments worth <span className="gradient-text">keeping.</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] [grid-auto-flow:dense]"
        >
          {profile.photos.map((p, i) => (
            <PhotoCard
              key={`${p.src}-${i}`}
              src={p.src}
              alt={p.alt}
              span={p.span ?? "square"}
              className="memory-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
