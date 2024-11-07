"use client";

import { LocaleType } from "@/navigation";
import { useLocale } from "next-intl";

interface Props {
  translations: {
    en: string;
    ru: string;
    am: string;
  };
}

export const Translate = ({ translations }: Props) => {
  const locale = useLocale() as LocaleType;

  const translatedText = translations[locale];

  if (!translatedText)
    return <>{translations["en"] || "Translation not available"}</>;

  return <>{translatedText}</>;
};
