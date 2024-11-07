import { cn } from "@/lib/utils";
import { PropsWithClassName } from "@/types/types";
import { Barlow } from "next/font/google";

const barlow = Barlow({ subsets: ["latin"], weight: ["600", "900"] });

interface Props extends PropsWithClassName {}

export const Logo = ({ className }: Props) => {
  return <p className={cn(className, barlow.className)}>Digitalize</p>;
};
