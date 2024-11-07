import { SubTitle } from "@/components/SubTitle";
import { DisplayTeamMembers } from "./DisplayTeamMembers";

export const OurTeam = () => {
  return (
    <section className=" w-full flex flex-col items-center gap-4">
      <SubTitle>Our Team</SubTitle>
      <DisplayTeamMembers />
    </section>
  );
};
