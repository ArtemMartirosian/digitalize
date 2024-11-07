import { RootProviders } from "@/components/providers/RootProviders";
import { locales } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Quicksand } from "next/font/google";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import "../globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

interface Props {
  children: ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={quicksand.className}>
        <NextIntlClientProvider messages={messages}>
          <main className="mx-auto min-h-dvh w-full max-w-[1920px]">
            <RootProviders>{children}</RootProviders>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
