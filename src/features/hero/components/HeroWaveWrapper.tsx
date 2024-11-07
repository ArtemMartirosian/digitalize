"use client";

import { Wave } from "@/components/Wave";
import { motion } from "framer-motion";

export const HeroWaveWrapper = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "50%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: "spring" }}
      className="w-full absolute bottom-0 -z-10"
    >
      <Wave />
    </motion.div>
  );
};
