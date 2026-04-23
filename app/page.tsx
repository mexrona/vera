import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { Problem } from "@/components/Problem";
import { SocialProof } from "@/components/SocialProof";
import { Solution } from "@/components/Solution";

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <SocialProof />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
    </div>
  );
}
