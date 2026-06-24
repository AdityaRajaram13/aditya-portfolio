import { Reveal } from "./reveal";

type Props = {
  index: string;
  command: string; // shown after the prompt, e.g. "cat about.md"
  title: string;
  subtitle?: string;
};

export function SectionHeading({ index, command, title, subtitle }: Props) {
  return (
    <Reveal className="mb-10">
      <p className="text-sm text-muted">
        <span className="text-comment">{index}</span>{" "}
        <span className="text-prompt">➜</span>{" "}
        <span className="text-accent">~</span> {command}
      </p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        <span className="text-prompt">#</span> {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-sm text-muted">
          <span className="text-comment">// </span>
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
