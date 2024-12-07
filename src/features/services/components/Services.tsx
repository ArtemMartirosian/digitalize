import { SubTitle } from "@/components/SubTitle";
import { ServicesCarousel } from "./ServicesCarousel";
import {useTranslations} from "next-intl";

export const Services = () => {

  const t = useTranslations("");

  return (
    <section className=" w-full flex flex-col items-center gap-4">
      <SubTitle>{t("services")}</SubTitle>
      <ServicesCarousel />
    </section>
  );
};
