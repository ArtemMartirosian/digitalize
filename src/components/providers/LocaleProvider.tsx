"use client";

import { useLocale } from "next-intl";
import { Quicksand } from "next/font/google";
import React, { ReactNode } from "react";

const quicksand = Quicksand({ subsets: ["latin"] });

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const locale = useLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={quicksand.className}>{children}</body>
    </html>
  );
};
