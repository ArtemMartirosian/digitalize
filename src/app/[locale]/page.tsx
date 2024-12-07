import { Loading } from "@/components/Loading";
import { VerticalSectionDivider } from "@/components/VerticalSectionDivider";
import { About } from "@/features/about/components/About";
import { Contacts } from "@/features/contacts/components/Contacts";
import { Hero } from "@/features/hero/components/Hero";
import { OurTeam } from "@/features/our-team/components/OurTeam";
import { Services } from "@/features/services/components/Services";
import { Technologies } from "@/features/technologies/components/Technologies";
import { Suspense } from "react";
import {Portfolio} from "@/features/portfolio/components/Portfolio";

export default async function Home() {
  return (
    <section className="flex h-full w-full flex-col items-center gap-8">
      <Hero />
      <section className="flex h-full w-full max-w-screen-xl flex-col items-center gap-8 px-3 pt-16">
        <Suspense fallback={<Loading />}>
          <Technologies />
        </Suspense>
        <VerticalSectionDivider />
        <About />
        <VerticalSectionDivider />
        <Services />
        <VerticalSectionDivider />
        <OurTeam />
        <VerticalSectionDivider />
        <Portfolio/>
        <VerticalSectionDivider />
        <Contacts />
      </section>
    </section>
  );
}
