import { experiences } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-20">
      <SectionHeading
        index="02"
        command="git log --author=aditya"
        title="experience"
        subtitle="What I've shipped, owned, and led."
      />

      <div className="space-y-5">
        {experiences.map((exp, i) => (
          <Reveal key={exp.role + exp.company + i}>
            <article className="panel p-5 sm:p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.role}
                  <span className="text-fn">
                    {" "}
                    @ {exp.company}
                    {exp.product ? (
                      <span className="text-muted"> · {exp.product}</span>
                    ) : null}
                  </span>
                </h3>
                <span className="shrink-0 text-xs text-prompt">
                  {exp.period}
                  {exp.duration ? (
                    <span className="text-muted"> · {exp.duration}</span>
                  ) : null}
                </span>
              </div>

              <div className="mt-1 flex flex-wrap gap-x-3 text-xs text-muted">
                {exp.type ? <span>{exp.type}</span> : null}
                {exp.location ? <span>· {exp.location}</span> : null}
              </div>

              {exp.summary ? (
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/85">
                  <span className="text-comment"># </span>
                  {exp.summary}
                </p>
              ) : null}

              {exp.groups ? (
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {exp.groups.map((group) => (
                    <div key={group.title}>
                      <h4 className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-accent">
                        {group.title}
                      </h4>
                      <ul className="space-y-2">
                        {group.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm leading-relaxed text-foreground/85"
                          >
                            <span className="mt-0.5 shrink-0 text-prompt">▹</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}

              {exp.skills ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs text-foreground/75"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
