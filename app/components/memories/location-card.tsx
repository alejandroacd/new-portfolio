"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { profile } from "@/app/lib/profile";

export function LocationCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".map-pin-ring", { scale: 1, opacity: 0.6 });
      gsap.to(".map-pin-ring", {
        scale: 3.2,
        opacity: 0,
        duration: 2.4,
        ease: "power2.out",
        repeat: -1,
        stagger: 1.2,
      });
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="bento-card relative flex flex-col p-6 sm:p-8 lg:col-span-2 lg:row-span-2 sm:col-span-2"
    >
      <div className="flex items-start justify-between">
        <p className="section-label">Based in</p>
        <span className="font-mono text-[10px] text-zinc-600">{profile.location.tzLabel}</span>
      </div>

      <div className="relative my-2 flex flex-1 items-center justify-center">
        <svg
          viewBox="0 0 200 300"
          className="h-full max-h-[260px] w-auto"
          aria-hidden
        >
          {/* Stylized Argentina silhouette */}
          <path
            d="M108,18 L118,34 L122,58 L128,82 L132,108 L138,128 L134,150 L140,172 L132,196 L126,218 L116,238 L108,256 L96,272 L92,284 L84,278 L80,262 L74,244 L70,224 L72,202 L68,180 L64,156 L70,132 L74,108 L80,82 L88,58 L96,38 Z"
            fill="rgb(167 139 250 / 0.06)"
            stroke="rgb(167 139 250 / 0.35)"
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* CABA marker */}
          <g transform="translate(112 188)">
            <circle
              className="map-pin-ring"
              r="4"
              fill="rgb(167 139 250 / 0.7)"
            />
            <circle
              className="map-pin-ring"
              r="4"
              fill="rgb(167 139 250 / 0.7)"
            />
            <circle r="4" fill="rgb(167 139 250)" />
            <circle r="2" fill="rgb(237 233 254)" />
          </g>
        </svg>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="text-base font-semibold text-zinc-200">{profile.location.label}</p>
          <p className="font-mono text-[10px] text-zinc-600">{profile.location.coords}</p>
        </div>
        <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" aria-hidden />
      </div>
    </div>
  );
}
