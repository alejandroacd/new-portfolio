import { profile } from "@/app/lib/profile";

export function StackCard() {
  return (
    <div className="bento-card flex flex-col gap-4 p-6 sm:p-8 lg:col-span-2 lg:row-span-2 sm:col-span-2">
      <p className="section-label">Stack I love</p>

      <div className="flex flex-1 flex-wrap content-center gap-2">
        {profile.stack.map((tool) => (
          <span
            key={tool}
            className="rounded-md border border-zinc-700/50 bg-zinc-800/80 px-3 py-1.5 font-mono text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            {tool}
          </span>
        ))}
      </div>

      <p className="font-mono text-[10px] text-zinc-600">
        + whatever the project demands
      </p>
    </div>
  );
}
