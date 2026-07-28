import type { CaseStudySection } from "@/content/types";

const WORDS_PER_MINUTE = 200;

export function sectionHasContent(section: CaseStudySection): boolean {
  if (section.enabled === false) return false;
  if (section.content?.trim()) return true;
  if (section.images?.length) return true;
  if (section.embedUrl?.trim()) return true;
  if (section.metrics?.length) return true;
  return false;
}

export function getVisibleSections(sections: CaseStudySection[]): CaseStudySection[] {
  return sections.filter(sectionHasContent);
}

export function estimateReadingTimeMinutes(sections: CaseStudySection[]): number {
  const text = sections
    .filter(sectionHasContent)
    .map((s) => s.content ?? "")
    .join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function splitParagraphs(content: string): string[] {
  return content
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export const SECTION_LABELS: Record<CaseStudySection["kind"], string> = {
  overview: "Overview",
  problem: "Problem",
  businessGoals: "Business goals",
  research: "Research",
  insights: "Insights",
  personas: "User personas",
  journey: "Journey mapping",
  painPoints: "Pain points",
  competitive: "Competitive analysis",
  process: "Design process",
  wireframes: "Wireframes",
  iterations: "Iterations",
  decisions: "Design decisions",
  finalUi: "Final UI",
  prototype: "Prototype",
  accessibility: "Accessibility",
  handoff: "Developer handoff",
  outcome: "Outcome",
  metrics: "Metrics",
  lessons: "Lessons learned",
  nextSteps: "Next steps",
};
