import Image from "next/image";

interface ProjectCardProps {
  imgSrc: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  githubLink?: string;
  year: string;
  linkText?: string;
}

export function ProjectCard({
  imgSrc,
  title,
  description,
  tags,
  link,
  githubLink,
  year,
  linkText = "View Project",
}: ProjectCardProps) {
  return (
    <div className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-600 hover:shadow-2xl hover:shadow-black/40">
      <div className="aspect-video overflow-hidden relative">
        <Image
          src={imgSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-xs text-zinc-600">{year}</span>
          <div className="flex gap-2 flex-wrap justify-end">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h3 className="mb-2 text-xl font-bold text-zinc-100 transition-colors group-hover:text-white">
          {title}
        </h3>
        <p className="flex-1 text-sm text-zinc-500 leading-relaxed">
          {description}
        </p>

        <div className="mt-4 flex items-center gap-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-all hover:text-white hover:gap-3"
          >
            {linkText}
            <span>&rarr;</span>
          </a>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 transition-colors hover:text-zinc-300"
              aria-label="View source on GitHub"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
