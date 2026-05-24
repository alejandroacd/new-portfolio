"use client";

import { profile } from "@/app/lib/profile";

function SpotifyIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function EqBars({ count = 4, heightPx = 18, barWidth = 3 }: { count?: number; heightPx?: number; barWidth?: number }) {
  return (
    <div className="flex items-end gap-[3px]" style={{ height: heightPx }}>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="rounded-full bg-emerald-400"
          style={{
            width: barWidth,
            height: "100%",
            transformOrigin: "bottom",
            animation: `spotify-eq ${0.42 + i * 0.09}s ease-in-out ${i * 0.11}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}

const WAVE_HEIGHTS = [
  18, 38, 62, 48, 78, 30, 88, 56, 42, 70, 34, 60, 82, 46, 28, 64,
  74, 40, 56, 86, 32, 58, 68, 44, 80, 50, 36, 72, 54, 24,
];

function CoverArt() {
  return (
    <div className="relative w-full h-full">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(155deg, #052e16 0%, #064e3b 45%, #022c22 75%, #050a08 100%)",
        }}
      />

      {/* Vinyl groove rings */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "repeating-radial-gradient(circle at 50% 110%, transparent 0, transparent 14px, rgba(16,185,129,0.05) 14px, rgba(16,185,129,0.05) 15px)",
        }}
      />

      {/* Subtle top-left highlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 18% 12%, rgba(110,231,183,0.12) 0%, transparent 45%)",
        }}
      />

      {/* Animated waveform bars */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-[3px] px-5"
        style={{ height: "62%" }}
      >
        {WAVE_HEIGHTS.map((h, i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: "4px",
              height: `${h}%`,
              background: "linear-gradient(to top, #10b981, #34d399 70%, #6ee7b7)",
              opacity: 0.85,
              transformOrigin: "bottom",
              animation: `spotify-wave ${0.6 + (i % 6) * 0.13}s ease-in-out ${i * 0.05}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Bottom emerald glow halo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(16,185,129,0.35) 0%, transparent 70%)",
        }}
      />

      {/* Inner border for definition */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(16,185,129,0.18)" }}
      />
    </div>
  );
}

type Track = { readonly title: string; readonly artist: string; readonly duration: string };

function TrackRow({ track, index, isPlaying }: { track: Track; index: number; isPlaying: boolean }) {
  return (
    <div
      className={`group/row relative flex items-center gap-3 px-3 py-3 rounded-lg transition-colors duration-200 ${
        isPlaying ? "bg-emerald-500/[0.07]" : "hover:bg-zinc-800/40"
      }`}
    >
      {isPlaying && (
        <span
          aria-hidden
          className="absolute left-0 top-1/2 -translate-y-1/2 h-7 w-[2px] rounded-full bg-emerald-400"
        />
      )}

      <div className="w-5 flex items-center justify-center shrink-0">
        {isPlaying ? (
          <EqBars count={3} heightPx={13} barWidth={2} />
        ) : (
          <span className="text-zinc-600 font-mono text-xs tabular-nums">{index + 1}</span>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p
          className={`text-sm font-medium truncate leading-tight ${
            isPlaying ? "text-emerald-400" : "text-zinc-200"
          }`}
        >
          {track.title}
        </p>
        <p className="text-[11px] text-zinc-500 truncate mt-0.5">{track.artist}</p>
      </div>

      <span className="text-zinc-600 font-mono text-[11px] shrink-0 tabular-nums">
        {track.duration}
      </span>
    </div>
  );
}

export function SpotifyCard() {
  const playlistUrl = profile.spotifyEmbedUrl
    .replace("open.spotify.com/embed/", "open.spotify.com/")
    .split("?")[0];

  const trackCount = profile.spotifyPlaylist.tracks.length;

  return (
    <div className="bento-card flex flex-col p-6 sm:p-7 lg:col-span-2 lg:row-span-2 sm:col-span-2 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <p className="section-label">On repeat</p>
        <SpotifyIcon size={16} className="text-emerald-400" />
      </div>

      {/* Hero cover art */}
      <div
        className="relative w-full aspect-square sm:aspect-[5/4]  rounded-2xl overflow-hidden mb-5"
        style={{
          boxShadow:
            "0 24px 60px -16px rgba(16, 185, 129, 0.35), 0 8px 24px -8px rgba(0,0,0,0.6)",
        }}
      >
        <CoverArt />
      </div>

      {/* Title block */}
      <div className="flex items-end justify-between gap-4 mb-3">
        <div className="min-w-0">
          <h3 className="text-white font-semibold text-xl leading-tight tracking-tight">
            .✦ ݁˖.✦ ݁˖.✦ ݁˖.✦ ݁˖.✦ ݁˖
          </h3>
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-zinc-500 mt-1">
            Playlist · {trackCount} songs · Spotify
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 pb-0.5">
          <EqBars count={4} heightPx={16} barWidth={3} />
          <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-emerald-400">
            Playing
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-2" />

      {/* Tracks */}
      <div className="flex-1 flex flex-col gap-0.5 max-h-[220px] overflow-y-auto pr-1.5 ">
        {profile.spotifyPlaylist.tracks.map((track, i) => (
          <TrackRow key={i} track={track} index={i} isPlaying={i === 0} />
        ))}
      </div>

      {/* CTA */}
      <a
        href={playlistUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group/cta mt-5 flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm tracking-wide hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
        style={{
          transition: "transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.2s ease, box-shadow 0.3s ease",
          boxShadow: "0 8px 24px -8px rgba(16, 185, 129, 0.4)",
        }}
      >
        <SpotifyIcon size={18} />
        Open in Spotify
      </a>
    </div>
  );
}
