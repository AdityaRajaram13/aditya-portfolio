import { projects } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ExternalIcon, GithubIcon } from "@/components/icons";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-20">
      <SectionHeading
        index="03"
        command="ls ./projects"
        title="selected work"
        subtitle="Systems I designed and built in production."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.08}>
            <article className="panel group flex h-full flex-col p-5 transition hover:border-prompt/40">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-foreground transition group-hover:text-prompt">
                  <span className="text-comment">~/</span>
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-muted">
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} repository`}
                      className="transition hover:text-foreground"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  ) : null}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live`}
                      className="transition hover:text-foreground"
                    >
                      <ExternalIcon className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.blurb}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-border px-2 py-0.5 text-xs text-foreground/65"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
