"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/app/lib/profile";

function useTextScramble(text: string) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef<number>(0);
  const iterRef = useRef(0);

  const trigger = useCallback(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&';
    iterRef.current = 0;
    cancelAnimationFrame(frameRef.current);
    const animate = () => {
      iterRef.current += 0.45;
      setDisplay(
        text.split('').map((char, i) =>
          char === ' ' ? ' ' :
          i < Math.floor(iterRef.current) ? char :
          chars[Math.floor(Math.random() * chars.length)]
        ).join('')
      );
      if (iterRef.current < text.length) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
  }, [text]);

  useEffect(() => () => { cancelAnimationFrame(frameRef.current); }, []);
  return { display, trigger };
}
import { BioCard } from "@/app/components/memories/bio-card";
import { LocationCard } from "@/app/components/memories/location-card";
import { SpotifyCard } from "@/app/components/memories/spotify-card";
import { SocialCard } from "@/app/components/memories/social-card";
import { ClockCard } from "@/app/components/memories/clock-card";
import { StackCard } from "@/app/components/memories/stack-card";
import { NowCard } from "@/app/components/memories/now-card";
import { ContactCtaCard } from "@/app/components/memories/contact-cta-card";

gsap.registerPlugin(ScrollTrigger);

export function HeroAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-tagline", { opacity: 0, y: 20, duration: 0.6 })
        .from(".hero-pfp", { opacity: 0, scale: 0.85, duration: 0.7 }, "-=0.3")
        .from(
          ".hero-line-inner",
          { y: "110%", duration: 1, stagger: 0.15, ease: "power4.out" },
          "-=0.5"
        )
        .from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.8 }, "-=0.4")
        .from(
          ".hero-cta",
          { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 },
          "-=0.4"
        );

      gsap.set(".bento-card", { opacity: 0, y: 40, scale: 0.96 });
      gsap.to(".bento-card", {
        scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: { each: 0.06, from: "start" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const { display: scrambledName, trigger: scrambleName } = useTextScramble("Contreras");



  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleGridMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".bento-card");
    cards?.forEach((card) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    });
  };

  const handleGridMouseLeave = () => {
    gridRef.current?.querySelectorAll<HTMLElement>(".bento-card").forEach((card) => {
      card.style.setProperty("--mouse-x", "-999px");
      card.style.setProperty("--mouse-y", "-999px");
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-10 px-8 pt-32 pb-24 md:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Hero band: avatar LEFT + name/bio/CTAs RIGHT */}
        <div className="mb-16 flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
          <div className="hero-pfp relative h-32 w-32 shrink-0 overflow-hidden rounded-full ring-1 ring-zinc-700/60 md:h-40 md:w-40 lg:h-48 lg:w-48">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              sizes="200px"
              priority
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-start gap-5">
            <p className="hero-tagline font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase">
              {profile.taglineFirst}
            </p>
            <h1 className="text-5xl font-black leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
              <span className="block overflow-hidden pb-1">
                <span className="hero-line-inner block">Ale</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span
                  className="hero-line-inner block gradient-text cursor-default select-none"
                  onMouseEnter={scrambleName}
                >
                  {scrambledName}
                </span>
              </span>
            </h1>
            <p className="hero-subtitle max-w-lg text-base text-zinc-400 leading-relaxed md:text-lg">
              Crafting high-performance interfaces and AI-powered experiences at
              Above + Beyond Consulting. 3+ years architecting digital products
              that are as beautiful as they are fast.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => handleScroll("#work")}
                className="hero-cta btn-magnetic group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:gap-5 cursor-pointer"
              >
                View Work
                <span className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="hero-cta btn-magnetic inline-flex items-center gap-3 rounded-full border border-zinc-700 px-7 py-3.5 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-400 hover:text-white cursor-pointer"
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>

        {/* Bento grid */}
        <div
          ref={gridRef}
          onMouseMove={handleGridMouseMove}
          onMouseLeave={handleGridMouseLeave}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(140px,_auto)]"
        >
          <LocationCard />
          <BioCard />
          <ClockCard />
          <SocialCard platform="github" {...profile.socials.github} />

          <SpotifyCard />
          <SocialCard platform="twitter" {...profile.socials.twitter} />
          <SocialCard platform="instagram" {...profile.socials.instagram} />
          <SocialCard platform="linkedin" {...profile.socials.linkedin} />

          <StackCard />
          <ContactCtaCard />
        </div>
      </div>
    </section>
  );
}
