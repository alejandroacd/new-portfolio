"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-400">
              Full name
            </label>
            <input
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-colors focus:border-zinc-600 focus:bg-zinc-900"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-400">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-colors focus:border-zinc-600 focus:bg-zinc-900"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-400">
            Message
          </label>
          <textarea
            required
            rows={5}
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-colors focus:border-zinc-600 focus:bg-zinc-900"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-magnetic group inline-flex items-center gap-3 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:gap-5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {status === "sending" ? "Sending..." : "Send message"}
          <span className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </button>

        {status === "success" && (
          <p className="text-sm text-emerald-400">
            Message sent! I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">
            Something went wrong. Please try again or email me directly.
          </p>
        )}
      </form>

      <div className="mt-10 flex items-center gap-5">
        <a
          href="https://github.com/alejandroacd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 transition-colors hover:text-zinc-300"
          aria-label="GitHub"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>
        <a
          href="https://linkedin.com/in/alejandroacd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 transition-colors hover:text-zinc-300"
          aria-label="LinkedIn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a
          href="mailto:alejandroalicd@gmail.com"
          className="text-zinc-600 transition-colors hover:text-zinc-300"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  );
}
