import { profile } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const highlights = [
  "Correctness where it counts — money, taxes, inventory",
  "Pragmatic architecture over resume-driven complexity",
  "End-to-end ownership, data model up to the UI",
  "Leveling up a team into backend engineering",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-20">
      <SectionHeading index="01" command="cat about.md" title="about" />
      <div className="grid gap-6 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="panel h-full p-6">
            <p className="text-sm leading-relaxed text-foreground/90 sm:text-[15px]">
              {profile.bio}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-2">
          <div className="panel h-full p-6">
            <p className="mb-4 text-xs text-comment">{"// what I optimize for"}</p>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm">
                  <span className="text-prompt">▹</span>
                  <span className="text-foreground/85">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
