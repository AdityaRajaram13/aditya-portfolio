import { BinaryRain } from "./binary-rain";

// Decorative background — fixed behind all content: terminal grid +
// floating binary rain, faded toward the edges by a radial vignette.
export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="grid-bg absolute inset-0 opacity-30 dark:opacity-25" />
      <BinaryRain />
      {/* gentle radial vignette so the rain fades toward the edges without hiding it */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--background)_100%)]" />
      {/* faint terminal glow at the top */}
      <div className="absolute -top-40 left-1/2 h-80 w-[680px] -translate-x-1/2 rounded-full bg-prompt/10 blur-[120px]" />
    </div>
  );
}
