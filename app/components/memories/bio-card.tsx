import { profile } from "@/app/lib/profile";

export function BioCard() {
  return (
    <div className="bento-card flex flex-col justify-center gap-3 p-6 sm:p-8 lg:col-span-2 lg:row-span-1 sm:col-span-2">
      <p className="section-label">About</p>
      <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">{profile.bio}</p>
    </div>
  );
}
