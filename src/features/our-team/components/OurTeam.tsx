import { SubTitle } from "@/components/SubTitle";
import { DisplayTeamMembers } from "./DisplayTeamMembers";
import {useTranslations} from "next-intl";

export const OurTeam = () => {
    const t = useTranslations("");
  return (
    <section className=" w-full flex flex-col items-center gap-4">
      <SubTitle>{t("team")}</SubTitle>
      <DisplayTeamMembers />
    </section>
  );
};
