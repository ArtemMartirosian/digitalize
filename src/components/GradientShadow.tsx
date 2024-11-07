"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  position: "left" | "right" | "top" | "bottom";
  twWidth?: number;
}

export const GradientShadow = ({ position, twWidth = 32 }: Props) => {
  return (
    <motion.div
      className={cn(
        ` z-20 pointer-events-none from-background to-transparent`,
        position === "right" &&
          `absolute bg-gradient-to-l right-0 top-0 h-full w-${twWidth}`,
        position === "left" &&
          `absolute bg-gradient-to-r left-0 top-0 h-full w-${twWidth}`,
        position === "top" && "fixed bg-gradient-to-b left-0 top-0 h-10 w-full",
        position === "bottom" &&
          "fixed bg-gradient-to-t left-0 bottom-0 h-10 w-full"
      )}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1, type: "spring" },
      }}
    />
  );
};
