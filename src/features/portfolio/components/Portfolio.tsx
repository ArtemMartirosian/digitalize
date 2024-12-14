import { SubTitle } from "@/components/SubTitle";
import DisplayPortfolio from "@/features/portfolio/components/DisplayPortfolio";
import { useTranslations } from "next-intl";

export const Portfolio = () => {
  const t = useTranslations("");

  return (
    <section className="flex w-full flex-col items-center gap-6">
      <SubTitle>{t("ourPortfolio")}</SubTitle>
      <DisplayPortfolio />
    </section>
  );
};
