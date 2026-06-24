"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { navLinks, profile } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handle = profile.name.toLowerCase().replace(/[^a-z]/g, "") || "dev";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-xl px-3 py-2 transition-all duration-300 ${
          scrolled
            ? "border border-border bg-surface/90 shadow-lg shadow-black/20 backdrop-blur"
            : "border border-transparent"
        }`}
      >
        {/* window dots + path */}
        <a href="#top" className="flex items-center gap-3">
          <span className="hidden items-center gap-1.5 sm:flex">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </span>
          <span className="text-sm text-muted">
            <span className="text-prompt">{handle}</span>
            <span className="text-foreground">@portfolio</span>
            <span className="text-muted"> ~ </span>
          </span>
        </a>

        <div className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted transition hover:bg-surface-2 hover:text-foreground"
            >
              <span className="text-prompt">./</span>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={profile.resumeUrl}
            className="hidden rounded-md border border-prompt/40 px-3 py-1.5 text-sm text-prompt transition hover:bg-prompt/10 sm:inline-block"
          >
            resume.pdf
          </Link>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-foreground md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-4 w-4"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-5xl px-3 md:hidden">
          <div className="flex flex-col gap-0.5 rounded-xl border border-border bg-surface p-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted transition hover:bg-surface-2 hover:text-foreground"
              >
                <span className="text-prompt">./</span>
                {link.label}
              </a>
            ))}
            <Link
              href={profile.resumeUrl}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-prompt transition hover:bg-surface-2"
            >
              resume.pdf
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
