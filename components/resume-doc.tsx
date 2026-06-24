"use client";

import Link from "next/link";
import {
  profile,
  experiences,
  skillCategories,
} from "@/lib/content";

export function ResumeDoc() {
  const contacts = [
    profile.email && { label: profile.email, href: `mailto:${profile.email}` },
    profile.phone && {
      label: profile.phone,
      href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
    },
    profile.socials.linkedin && {
      label: profile.socials.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
      href: profile.socials.linkedin,
    },
    profile.socials.github && {
      label: profile.socials.github.replace(/^https?:\/\//, ""),
      href: profile.socials.github,
    },
    profile.location && { label: profile.location, href: "" },
  ].filter(Boolean) as { label: string; href: string }[];

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
        <header>
          <h1>{profile.name}</h1>
          <p style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>
            {profile.role}
          </p>
          <p className="muted" style={{ marginTop: 8, fontSize: 12.5 }}>
            {contacts.map((c, i) => (
              <span key={c.label}>
                {i > 0 && <span style={{ margin: "0 8px" }}>·</span>}
                {c.href ? <a href={c.href}>{c.label}</a> : c.label}
              </span>
            ))}
          </p>
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
              style={{ marginBottom: 14, breakInside: "avoid" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <h3>
                  {exp.role} — {exp.company}
                  {exp.product ? ` (${exp.product})` : ""}
                </h3>
                <span className="muted" style={{ fontSize: 12.5, whiteSpace: "nowrap" }}>
                  {exp.period}
                </span>
              </div>
              <p className="muted" style={{ fontSize: 12, marginBottom: 4 }}>
                {[exp.type, exp.location].filter(Boolean).join(" · ")}
              </p>
              {exp.summary ? (
                <p style={{ margin: "2px 0 4px" }}>{exp.summary}</p>
              ) : null}
              {exp.groups ? (
                <ul>
                  {exp.groups.flatMap((g) =>
                    g.points.map((p, idx) => <li key={g.title + idx}>{p}</li>)
                  )}
                </ul>
              ) : null}
              {exp.skills ? (
                <p style={{ fontSize: 12.5 }}>
                  <strong>Skills:</strong> {exp.skills.join(", ")}
                </p>
              ) : null}
            </div>
          ))}
        </section>

        {/* skills */}
        <section>
          <h2>Skills</h2>
          {skillCategories.map((cat) => (
            <p key={cat.title} style={{ margin: "3px 0", fontSize: 12.5 }}>
              <strong>{cat.title}:</strong> {cat.skills.join(", ")}
            </p>
          ))}
        </section>
      </article>
    </div>
  );
}
