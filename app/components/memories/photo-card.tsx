import Image from "next/image";
import type { PhotoSpan } from "@/app/lib/profile";

interface PhotoCardProps {
  src: string;
  alt: string;
  span?: PhotoSpan;
  className?: string;
}

const spanClassMap: Record<PhotoSpan, string> = {
  square: "col-span-1 row-span-1",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  feature: "col-span-2 row-span-2",
};

export function PhotoCard({ src, alt, span = "square", className = "" }: PhotoCardProps) {
  return (
    <div className={`bento-card group relative ${spanClassMap[span]} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="font-mono text-xs uppercase tracking-wider text-zinc-300">{alt}</span>
      </div>
    </div>
  );
}
