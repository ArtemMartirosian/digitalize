import { getCurrentYear } from "../utils/getCurrentYear";
import {useTranslations} from "next-intl";

export const Footer = () => {
  const currentYear = getCurrentYear();
    const t = useTranslations("");

  return (
    <footer className=" w-full relative h-16 bg-background border-t flex items-center justify-center text-center z-30">
      <p className=" text-foreground/80 font-semibold">
        &copy; {currentYear} Digitalize {t("rightsReserved")}.
      </p>
    </footer>
  );
};
