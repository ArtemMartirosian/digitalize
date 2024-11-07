"use client";

import { useClient } from "@/hooks/useClient";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggler = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isClient = useClient();
  const isDark = resolvedTheme === "dark";

  const onToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  if (!isClient) return null;

  return (
    <motion.button
      onClick={onToggleTheme}
      className=" size-10 bg-foreground text-background flex items-center justify-center fixed sm:bottom-6 sm:right-6 right-4 bottom-4 z-40 rounded-full"
      initial={{ opacity: 0, y: 100, scale: 0 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1, type: "spring" },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  );
};
