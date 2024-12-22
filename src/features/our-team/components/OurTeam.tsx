import { SubTitle } from "@/components/SubTitle";
import { DisplayTeamMembers } from "./DisplayTeamMembers";
import { useTranslations } from "next-intl";

export const OurTeam = () => {
  const t = useTranslations("");
  return (
    <section className="flex w-full flex-col items-center gap-6">
      <SubTitle>{t("team")}</SubTitle>
      <DisplayTeamMembers />
    </section>
  );
};
