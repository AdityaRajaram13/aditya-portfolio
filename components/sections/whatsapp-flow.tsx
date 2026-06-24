import { whatsappFlowGuide as guide } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function WhatsappFlow() {
  return (
    <section id="flows" className="mx-auto max-w-5xl px-4 py-20">
      <SectionHeading
        index="04"
        command="man whatsapp-flows"
        title={guide.title}
        subtitle={guide.intro}
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {/* steps */}
        <Reveal>
          <ol className="panel space-y-4 p-5 sm:p-6">
            {guide.steps.map((step, i) => (
              <li key={step.cmd} className="flex gap-3">
                <span className="shrink-0 select-none font-semibold text-prompt">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-semibold text-accent">
                    <span className="text-prompt">$ </span>
                    {step.cmd}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* code sample */}
        <Reveal delay={0.1}>
          <div className="panel overflow-hidden">
            <div className="titlebar flex items-center gap-2 px-4 py-2.5">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              </span>
              <span className="mx-auto text-xs text-muted">
                send-flow.http
              </span>
            </div>
            <pre className="overflow-x-auto px-4 py-4 text-xs leading-relaxed text-foreground/85">
              <code>{guide.snippet}</code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
