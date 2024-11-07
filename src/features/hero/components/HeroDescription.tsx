"use client";

import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Barlow } from "next/font/google";
import { useRef, useState } from "react";
import { v4 } from "uuid";
import { SYNONYMS } from "../constants/synonyms";
import { LocaleType } from "@/i18n/routing";

const barlow = Barlow({ subsets: ["latin"], weight: ["600", "700", "900"] });

export const HeroDescription = () => {
  const [currentSynonymIndex, setCurrentSynonymIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const t = useTranslations("hero");
  const locale = useLocale() as LocaleType;
  const synonyms = SYNONYMS[locale];

  useIsomorphicLayoutEffect(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrentSynonymIndex(prev => (prev >= synonyms.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return (
    <motion.p
      className={cn(
        "text-2xl font-bold text-muted-foreground md:text-3xl lg:text-4xl",
        barlow.className
      )}
      initial={{ opacity: 0, y: 25, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.5, type: "spring" }}
    >
      {t("first_chunk")}{" "}
      <span className="whitespace-nowrap">
        {synonyms[currentSynonymIndex].split("").map((item, index) => (
          <motion.span
            key={v4()}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.05, duration: 0.8, type: "spring" }}
            className="inline-block text-violet-500"
          >
            {item}
          </motion.span>
        ))}
      </span>{" "}
      {t("second_chunk")}
    </motion.p>
  );
};
