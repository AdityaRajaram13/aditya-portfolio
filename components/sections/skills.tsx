import { skillCategories } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-20">
      <SectionHeading index="05" command="cat skills.json" title="skills & tooling" />

      <Reveal>
        <div className="panel overflow-hidden">
          <div className="titlebar flex items-center gap-2 px-4 py-2.5">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </span>
            <span className="mx-auto text-xs text-muted">skills.json</span>
          </div>
          <div className="grid gap-x-8 gap-y-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="mb-3 text-xs font-semibold text-accent">
                  <span className="text-string">&quot;{category.title}&quot;</span>
                  <span className="text-muted">: [</span>
                </h3>
                <ul className="flex flex-wrap gap-1.5 pl-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs text-foreground/85"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
                <span className="mt-2 block pl-0 text-xs text-muted">]</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
