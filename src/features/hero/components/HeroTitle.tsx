"use client";

import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const HeroTitle = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className={cn(
        "bg-gradient-to-r from-muted-foreground to-muted bg-clip-text text-[clamp(64px,_10vw,_256px)] leading-none font-black uppercase tracking-wider text-transparent"
      )}
    >
      <Logo />
    </motion.h1>
  );
};
