import { Separator } from "@/components/ui/separator";
import { OurTeamForm } from "./OurTeamForm";
import { DisplayDashboardTeam } from "./DisplayDashboardTeam";

export const OurTeamTemplate = () => {
  return (
    <section className="flex w-full flex-col gap-8">
      <OurTeamForm />
      <Separator />
      <DisplayDashboardTeam />
    </section>
  );
};
