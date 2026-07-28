import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ResumeSection } from "@/components/home/ResumeSection";
import { Contact } from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <ResumeSection />
      <Contact />
    </>
  );
}
