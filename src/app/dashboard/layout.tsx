import { ourFileRouter } from "@/app/api/uploadthing/core";
import { auth } from "@/auth";
import { ClientSessionProvider } from "@/components/providers/ClientSessionProvider";
import { NextThemeProvider } from "@/components/providers/NextThemeProvider";
import { SonnerProvider } from "@/components/providers/SonnerProvider";
import { TanstackProvider } from "@/components/providers/TanstackProvider";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { extractRouterConfig } from "uploadthing/server";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: ReactNode;
}

export default async function DashboardLayout({ children }: Props) {
  const session = await auth();
  return (
    <ClientSessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <section className="w-full max-w-[1920px] mx-auto">
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
