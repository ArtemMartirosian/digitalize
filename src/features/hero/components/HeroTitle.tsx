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
        "bg-gradient-to-r from-muted-foreground to-muted bg-clip-text text-[56px] font-black uppercase tracking-wider text-transparent sm:text-7xl md:text-8xl lg:text-9xl"
      )}
    >
      <Logo />
    </motion.h1>
  );
};
