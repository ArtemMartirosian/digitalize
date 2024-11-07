import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const locales = ["en", "ru", "am"] as const;
export const localePrefix = "always";
export const defaultLocale = locales[0];

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix,
});

export const pathnames = {
  "/": "/",
  "/about": "/about",
  "/services": "/services",
  "/portfolio": "/portfolio",
  "/our-team": "/our-team",
  "/contacts": "/contacts",
};

export type LocaleType = (typeof locales)[number];

export type PathnamesType = keyof typeof pathnames;

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
