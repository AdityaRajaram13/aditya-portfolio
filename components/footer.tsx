import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-4 py-10">
      <div className="flex flex-col items-center justify-between gap-2 border-t border-border pt-8 text-xs text-muted sm:flex-row">
        <p>
          <span className="text-comment"># </span>© {new Date().getFullYear()}{" "}
          {profile.name}. exit 0;
        </p>
        <p>built with next.js · tailwind · framer-motion</p>
      </div>
    </footer>
  );
}
