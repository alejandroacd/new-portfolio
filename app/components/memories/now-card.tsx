import Link from "next/link";
import { profile } from "@/app/lib/profile";

export function NowCard() {
  return (
    <div className="bento-card flex flex-col justify-center gap-4 p-6 sm:p-8 lg:col-span-2 lg:row-span-1 sm:col-span-2">
      <p className="section-label">Right now</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <span className="mt-1 inline-flex h-2 w-2 shrink-0 animate-pulse rounded-full bg-violet-400" aria-hidden />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Building</p>
            <Link
              href={profile.now.building.href}
              className="text-sm text-zinc-200 transition-colors hover:text-white"
            >
              {profile.now.building.label}
            </Link>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" aria-hidden />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Reading</p>
            <p className="text-sm text-zinc-200">{profile.now.reading.title}</p>
            <p className="font-mono text-[10px] text-zinc-600">{profile.now.reading.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
