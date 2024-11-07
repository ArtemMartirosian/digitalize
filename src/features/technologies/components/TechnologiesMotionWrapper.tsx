"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const TechnologiesMotionWrapper = ({ children }: Props) => {
  return (
    <motion.section
      className="relative w-full h-fit"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      {children}
    </motion.section>
  );
};
