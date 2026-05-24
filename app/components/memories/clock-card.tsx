"use client";

import { useEffect, useState } from "react";
import { profile } from "@/app/lib/profile";

export function ClockCard() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: profile.location.timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bento-card flex flex-col justify-between gap-2 p-5 lg:col-span-1 lg:row-span-1">
      <p className="section-label">Local time</p>
      <p
        className="font-mono text-2xl font-medium tracking-tight text-zinc-100 tabular-nums sm:text-3xl"
        suppressHydrationWarning
      >
        {time}
      </p>
      <p className="font-mono text-[10px] text-zinc-600">
        Buenos Aires · {profile.location.tzLabel}
      </p>
    </div>
  );
}
