import { Footer } from "@/features/footer/components/Footer";
import { Navbar } from "@/features/navbar/components/Navbar";
import { ThemeToggler } from "@/features/theme/components/ThemeToggler";
import { ReactNode } from "react";
import { GradientShadow } from "../GradientShadow";
import { NextThemeProvider } from "./NextThemeProvider";
import { SonnerProvider } from "./SonnerProvider";
import { TanstackProvider } from "./TanstackProvider";

interface RootProvidersProps {
  children: ReactNode;
}

export const RootProviders = ({ children }: RootProvidersProps) => {
  return (
    <TanstackProvider>
      <NextThemeProvider>
        <GradientShadow position="top" />
        <Navbar />
        <ThemeToggler />
        <section className="mx-auto h-full pb-8">{children}</section>
        <Footer />
        <GradientShadow position="bottom" />
        <SonnerProvider />
      </NextThemeProvider>
    </TanstackProvider>
  );
};
