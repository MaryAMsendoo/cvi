import AboutPreview from "@/components/AboutPreview";
import GetInvolved from "@/components/GetInvolved";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import LeadershipPreview from "@/components/LeadershipPreview";
import Partners from "@/components/Partners";
import ProgramSpotlight from "@/components/ProgramSpotlight";

export default function Page() {
  return (
    <div>
      <Hero />

      <AboutPreview />

      <Impact />

      <ProgramSpotlight />

      <LeadershipPreview />

      <Partners />

      <GetInvolved />
    </div>
  );
}