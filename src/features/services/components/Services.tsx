import { SubTitle } from "@/components/SubTitle";
import { useTranslations } from "next-intl";
import { DisplayServices } from "./DisplayServices";

export const Services = () => {
  const t = useTranslations("");

  return (
    <section className="flex w-full flex-col items-center gap-4">
      <SubTitle>{t("services")}</SubTitle>
      <DisplayServices />
    </section>
  );
};
