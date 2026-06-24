"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/lib/content";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const line = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-4 pt-28 pb-16"
    >
      <div className="panel overflow-hidden shadow-2xl shadow-black/30">
        {/* title bar */}
        <div className="titlebar flex items-center gap-2 px-4 py-3">
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </span>
          <span className="mx-auto text-xs text-muted">
            {profile.name.toLowerCase().replace(/[^a-z]/g, "")} — zsh — 80×24
          </span>
        </div>

        {/* terminal body */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-1.5 px-5 py-6 text-sm leading-relaxed sm:px-7 sm:py-8 sm:text-base"
        >
          <motion.p variants={line}>
            <span className="text-prompt">➜</span>{" "}
            <span className="text-accent">~</span> whoami
          </motion.p>
          <motion.h1
            variants={line}
            className="py-1 text-3xl font-bold text-foreground sm:text-5xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={line}>
            <span className="text-prompt">➜</span>{" "}
            <span className="text-accent">~</span> cat role.txt
          </motion.p>
          <motion.p variants={line} className="text-fn">
            {profile.role}{" "}
            <span className="text-muted">
              @ {profile.company} ({profile.product})
            </span>
          </motion.p>

          <motion.p variants={line} className="pt-2">
            <span className="text-prompt">➜</span>{" "}
            <span className="text-accent">~</span> cat about.md
          </motion.p>
          <motion.p
            variants={line}
            className="max-w-2xl text-foreground/90"
          >
            <span className="text-comment"># </span>
            {profile.tagline}
          </motion.p>

          <motion.div variants={line} className="pt-4">
            <span className="text-prompt">➜</span>{" "}
            <span className="text-accent">~</span> ./run<span className="cursor" />
          </motion.div>

          {/* actions */}
          <motion.div variants={line} className="flex flex-wrap items-center gap-2.5 pt-4">
            <a
              href="#contact"
              className="rounded-md bg-prompt px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
            >
              get in touch
            </a>
            <a
              href="#projects"
              className="rounded-md border border-border px-4 py-2 text-sm text-foreground transition hover:border-prompt/50"
            >
              view work
            </a>
            <Link
              href={profile.resumeUrl}
              className="rounded-md border border-border px-4 py-2 text-sm text-foreground transition hover:border-prompt/50"
            >
              download resume
            </Link>
            <div className="ml-1 flex items-center gap-1">
              {profile.socials.github ? (
                <IconLink href={profile.socials.github} label="GitHub">
                  <GithubIcon className="h-5 w-5" />
                </IconLink>
              ) : null}
              {profile.socials.linkedin ? (
                <IconLink href={profile.socials.linkedin} label="LinkedIn">
                  <LinkedinIcon className="h-5 w-5" />
                </IconLink>
              ) : null}
              {profile.email ? (
                <IconLink href={`mailto:${profile.email}`} label="Email">
                  <MailIcon className="h-5 w-5" />
                </IconLink>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* stats */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3"
      >
        {profile.stats.map((stat) => (
          <div key={stat.label} className="panel p-4">
            <div className="text-lg font-bold text-prompt sm:text-xl">
              {stat.value}
            </div>
            <div className="mt-1 text-xs text-muted">
              <span className="text-comment">// </span>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="grid h-10 w-10 place-items-center rounded-md text-muted transition hover:bg-surface-2 hover:text-foreground"
    >
      {children}
    </a>
  );
}
