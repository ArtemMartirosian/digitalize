"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";

export const HeroGetStartedButton = () => {
  return (
    <motion.button
      initial={{ "--x": "100%", y: 50, opacity: 0, scale: 0.8 }}
      animate={{ "--x": "-100%", y: 0, opacity: 1, scale: 1 }}
      whileTap={{ scale: 0.8 }}
      whileHover={{ opacity: 0.9 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 2,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
        y: {
          type: "spring",
          stiffness: 8,
          damping: 2,
          mass: 0.1,
        },
        opacity: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className={cn(
        "radial-gradient relative h-fit rounded-full px-6 py-3 font-semibold text-white"
      )}
    >
      <span className="linear-mask relative inline-flex h-full w-full items-center gap-2">
        ✨ Get started now <ArrowRight size={16} />
      </span>
      <span className="linear-overlay absolute inset-0 block rounded-full p-px" />
    </motion.button>
  );
};
