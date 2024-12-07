import { Particles } from "@/components/Particles";
import { HeroDescription } from "./HeroDescription";
import { HeroGetStartedButton } from "./HeroGetStartedButton";
import { HeroTitle } from "./HeroTitle";
import { ParticleWrapper } from "./ParticleWrapper";

export const Hero = () => {
  return (
    <div className="relative flex h-dvh max-h-[960px] w-full flex-col items-center justify-center gap-8 overflow-hidden">
      <div className="flex flex-col items-center gap-2.5 px-3 text-center">
        <HeroTitle />
        <HeroDescription />
      </div>
      <div className="inline-flex w-fit justify-center gap-2.5">
        <HeroGetStartedButton />
      </div>
      <ParticleWrapper />
    </div>
  );
};
