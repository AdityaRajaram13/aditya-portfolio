"use client";

import Link from "next/link";
import { profile, experiences, skillCategories } from "@/lib/content";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons";

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
    </svg>
  );
}

export function ResumeDoc() {
  const strip = (u: string) => u.replace(/^https?:\/\/(www\.)?/, "");

  const contacts = [
    profile.email && {
      icon: <MailIcon />,
      label: profile.email,
      href: `mailto:${profile.email}`,
    },
    profile.phone && {
      icon: <PhoneIcon />,
      label: profile.phone,
      href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
    },
    profile.location && {
      icon: <PinIcon />,
      label: profile.location,
      href: "",
    },
    profile.website && {
      icon: <GlobeIcon />,
      label: strip(profile.website),
      href: profile.website,
    },
    profile.socials.linkedin && {
      icon: <LinkedinIcon />,
      label: strip(profile.socials.linkedin),
      href: profile.socials.linkedin,
    },
    profile.socials.github && {
      icon: <GithubIcon />,
      label: strip(profile.socials.github),
      href: profile.socials.github,
    },
  ].filter(Boolean) as {
    icon: React.ReactNode;
    label: string;
    href: string;
  }[];

  return (
    <div className="resume-page">
      {/* toolbar — hidden when printing */}
      <div className="no-print mx-auto mb-5 flex max-w-[820px] items-center justify-between">
        <Link
          href="/"
          className="rounded-md border border-white/30 px-3 py-1.5 text-sm text-white/90 transition hover:bg-white/10"
        >
          ← back to site
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-md bg-white px-4 py-1.5 text-sm font-medium text-black transition hover:opacity-90"
        >
          ↓ Download PDF
        </button>
      </div>

      <article className="resume-doc">
        {/* header */}
        <header className="r-head">
          <h1>{profile.name}</h1>
          <p className="r-role">{profile.role}</p>
          <div className="r-contact">
            {contacts.map((c) => {
              const external = c.href.startsWith("http");
              const inner = (
                <>
                  {c.icon}
                  <span>{c.label}</span>
                </>
              );
              return c.href ? (
                <a
                  key={c.label}
                  className="r-item"
                  href={c.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {inner}
                </a>
              ) : (
                <span key={c.label} className="r-item">
                  {inner}
                </span>
              );
            })}
          </div>
        </header>

        {/* summary */}
        <section>
          <h2>Summary</h2>
          <p>{profile.bio}</p>
        </section>

        {/* experience */}
        <section>
          <h2>Experience</h2>
          {experiences.map((exp, i) => (
            <div
              key={exp.role + exp.company + i}
              style={{ marginBottom: 13, breakInside: "avoid" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 12,
                }}
              >
                <h3>
                  {exp.role} <span className="r-company">· {exp.company}</span>
                  {exp.product ? ` (${exp.product})` : ""}
                </h3>
                <span className="r-when">{exp.period}</span>
              </div>
              <p className="r-meta">
                {[exp.type, exp.duration, exp.location]
                  .filter(Boolean)
                  .join("  ·  ")}
              </p>
              {exp.summary ? <p>{exp.summary}</p> : null}

              {exp.groups
                ? exp.groups.map((g) => (
                    <div key={g.title}>
                      <p className="r-group">{g.title}</p>
                      <ul>
                        {g.points.map((p, idx) => (
                          <li key={idx}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                : null}

              {exp.skills ? (
                <p style={{ marginTop: 4 }}>
                  <strong style={{ color: "var(--r-ink)" }}>Skills:</strong>{" "}
                  {exp.skills.join(", ")}
                </p>
              ) : null}
            </div>
          ))}
        </section>

        {/* skills */}
        <section>
          <h2>Skills &amp; Tooling</h2>
          {skillCategories.map((cat) => (
            <p key={cat.title} className="r-skill-row">
              <strong>{cat.title}:</strong> {cat.skills.join(", ")}
            </p>
          ))}
        </section>
      </article>
    </div>
  );
}
