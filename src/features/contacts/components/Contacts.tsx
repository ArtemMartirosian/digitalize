import { SubTitle } from "@/components/SubTitle";
import { ContactForm } from "./ContactForm";
import {useTranslations} from "next-intl";

export const Contacts = () => {

    const t = useTranslations("");

  return (
    <section className="flex w-full flex-col items-center gap-4">
      <SubTitle>{t("contact")}</SubTitle>
      <ContactForm />
    </section>
  );
};
