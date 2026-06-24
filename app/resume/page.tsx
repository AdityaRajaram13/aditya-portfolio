import type { Metadata } from "next";
import { ResumeDoc } from "@/components/resume-doc";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: `${profile.name} — Résumé`,
  description: `Résumé of ${profile.name}, ${profile.role}.`,
};

export default function ResumePage() {
  return <ResumeDoc />;
}
