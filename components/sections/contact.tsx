import { profile } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "@/components/icons";

export function Contact() {
  const socials = [
    profile.email && {
      label: "email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: MailIcon,
    },
    profile.phone && {
      label: "phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
      icon: PhoneIcon,
    },
    profile.socials.github && {
      label: "github",
      value: profile.socials.github.replace(/^https?:\/\//, ""),
      href: profile.socials.github,
      icon: GithubIcon,
    },
    profile.socials.linkedin && {
      label: "linkedin",
      value: profile.socials.linkedin.replace(/^https?:\/\//, ""),
      href: profile.socials.linkedin,
      icon: LinkedinIcon,
    },
    profile.socials.twitter && {
      label: "twitter",
      value: profile.socials.twitter.replace(/^https?:\/\//, ""),
      href: profile.socials.twitter,
      icon: TwitterIcon,
    },
  ].filter(Boolean) as {
    label: string;
    value: string;
    href: string;
    icon: typeof MailIcon;
  }[];

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-20">
      <Reveal>
        <div className="panel overflow-hidden">
          <div className="titlebar flex items-center gap-2 px-4 py-2.5">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </span>
            <span className="mx-auto text-xs text-muted">contact — bash</span>
          </div>

          <div className="px-5 py-7 sm:px-8 sm:py-10">
            <p className="text-sm">
              <span className="text-prompt">➜</span>{" "}
              <span className="text-accent">~</span> ./contact --message
            </p>
            <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
              Let&apos;s build something solid.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              <span className="text-comment"># </span>
              Open to full-stack roles, freelance systems work, and interesting
              problems involving data, payments, or scale. Fastest way to reach
              me is email.
            </p>

            <div className="mt-7 grid gap-2.5 sm:max-w-2xl">
              {socials.map(({ label, value, href, icon: Icon }) => {
                const external = href.startsWith("http");
                return (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-md border border-border px-4 py-3 text-sm transition hover:border-prompt/50 hover:bg-surface-2"
                  >
                    <Icon className="h-4 w-4 text-muted transition group-hover:text-prompt" />
                    <span className="w-20 shrink-0 text-fn">{label}</span>
                    <span className="truncate text-foreground/85">{value}</span>
                    <span className="ml-auto text-prompt opacity-0 transition group-hover:opacity-100">
                      →
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
