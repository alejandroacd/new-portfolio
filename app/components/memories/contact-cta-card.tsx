import { profile } from "@/app/lib/profile";

export function ContactCtaCard() {
  return (
    <a
      href={`mailto:${profile.email}`}
      className="bento-card btn-magnetic group flex flex-col justify-between gap-4 p-6 sm:p-8 lg:col-span-2 lg:row-span-1 sm:col-span-2"
    >

      <div className="flex items-end justify-between gap-4">
        <h3 className="text-2xl font-black leading-tight tracking-tight sm:text-3xl">
          Let&apos;s make{" "}
          <span className="gradient-text">something good.</span>
        </h3>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="shrink-0 text-zinc-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </div>

      <p className="font-mono text-[11px] text-zinc-500">{profile.email}</p>
    </a>
  );
}
