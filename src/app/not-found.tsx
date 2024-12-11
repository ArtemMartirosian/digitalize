"use client";

import { NextThemeProvider } from "@/components/providers/NextThemeProvider";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Poppins, Quicksand } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["900"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Not found",
  description: "O'ops, it looks like the page you are looking for not found",
};

export default function NotFoundPage() {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <NextThemeProvider>
          <section className="text-center w-full h-dvh grid place-items-center">
            <div className=" w-full max-w-screen-sm flex items-center flex-col gap-4">
              <h1
                className={cn(
                  " text-6xl font-bold uppercase",
                  poppins.className
                )}
              >
                Digitalize
              </h1>
              <p className=" text-xl text-foreground/50 font-semibold">
                O&apos;ops, it looks like the page you are looking for not found
              </p>
              <Link
                href="/"
                className="underline underline-offset-4 dark:hover:text-violet-500 hover:text-violet-600 transition-all font-semibold"
                replace
              >
                Back to home
              </Link>
            </div>
          </section>
        </NextThemeProvider>
      </body>
    </html>
  );
}
