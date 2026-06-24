"use client";

import { useEffect, useRef } from "react";

// Subtle floating "binary rain" — 0s and 1s drifting down the page,
// theme-aware (reads --prompt), retina-crisp, and reduced-motion friendly.
export function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const fontSize = 16;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let columns = 0;
    let drops: number[] = []; // head y (in rows) per column
    let speeds: number[] = [];

    // theme color, refreshed when <html> class changes
    let color = "86, 211, 100"; // fallback rgb (prompt green, dark)
    const readColor = () => {
      const hex = getComputedStyle(document.documentElement)
        .getPropertyValue("--prompt")
        .trim();
      const m = hex.match(/^#?([0-9a-f]{6})$/i);
      if (m) {
        const int = parseInt(m[1], 16);
        color = `${(int >> 16) & 255}, ${(int >> 8) & 255}, ${int & 255}`;
      }
    };
    readColor();
    const themeObserver = new MutationObserver(readColor);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${fontSize}px var(--font-geist-mono), monospace`;
      columns = Math.ceil(width / fontSize);
      drops = Array.from({ length: columns }, () =>
        Math.floor((Math.random() * -height) / fontSize)
      );
      speeds = Array.from({ length: columns }, () => 0.18 + Math.random() * 0.3);
    };
    resize();

    const tailLength = 20;
    let raf = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      // Brighter on phones (more visible on small screens), strong on desktop too.
      const headAlpha = width < 640 ? 0.85 : 0.7;

      for (let i = 0; i < columns; i++) {
        const x = i * fontSize;
        const headRow = drops[i];

        for (let t = 0; t < tailLength; t++) {
          const row = headRow - t;
          if (row < 0) continue;
          const y = row * fontSize;
          if (y > height) continue;
          // head brightest, tail fades out
          const alpha = (1 - t / tailLength) * headAlpha;
          ctx.fillStyle = `rgba(${color}, ${alpha.toFixed(3)})`;
          // deterministic-ish glyph that occasionally flips
          const bit =
            (Math.floor(x * 0.7 + row * 1.3 + (t === 0 ? Date.now() / 120 : 0)) &
              1) === 0
              ? "0"
              : "1";
          ctx.fillText(bit, x, y);
        }

        drops[i] += speeds[i];
        if (drops[i] * fontSize > height + tailLength * fontSize) {
          drops[i] = Math.floor((Math.random() * -height) / fontSize) - tailLength;
          speeds[i] = 0.18 + Math.random() * 0.3;
        }
      }
      raf = requestAnimationFrame(draw);
    };

    if (reduce) {
      // static, very faint single pass
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = `rgba(${color}, 0.08)`;
      for (let i = 0; i < columns; i += 1) {
        for (let r = 0; r < height / fontSize; r += 3) {
          if (Math.random() > 0.85)
            ctx.fillText(Math.random() > 0.5 ? "1" : "0", i * fontSize, r * fontSize);
        }
      }
    } else {
      raf = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("orientationchange", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("orientationchange", resize);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full"
    />
  );
}
