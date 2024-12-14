import { ourFileRouter } from "@/app/api/uploadthing/core";
import { auth } from "@/auth";
import { ClientSessionProvider } from "@/components/providers/ClientSessionProvider";
import { NextThemeProvider } from "@/components/providers/NextThemeProvider";
import { SonnerProvider } from "@/components/providers/SonnerProvider";
import { TanstackProvider } from "@/components/providers/TanstackProvider";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ReactNode } from "react";
import { extractRouterConfig } from "uploadthing/server";
import "../globals.css";
import { geistSans } from "../fonts/font";

interface Props {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: Props) {
  const session = await auth();
  return (
    <ClientSessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <body className={geistSans.className}>
          <section className="mx-auto w-full max-w-[1920px]">
            <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
            <TanstackProvider>
              <NextThemeProvider>{children}</NextThemeProvider>
              <SonnerProvider />
            </TanstackProvider>
          </section>
        </body>
      </html>
    </ClientSessionProvider>
  );
}
