"use client";

import { Separator } from "@/components/ui/separator";
import { Team } from "@prisma/client";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  item: Team;
  index: number;
}

const PortfolioCard = ({ item, index }: Props) => {
  return (
    <motion.div
      initial={{ y: 15, scale: 0.8, opacity: 0 }}
      whileInView={{
        y: 0,
        scale: 1,
        opacity: 1,
        transition: { delay: 0.1 * index, type: "spring" },
      }}
      viewport={{ once: true }}
      className="h-fit w-full"
    >
      <Link
        href="/"
        className="relative flex items-center justify-center overflow-hidden border border-dashed border-muted p-8 transition-all hover:border-solid hover:border-violet-500/30 hover:bg-violet-500/20"
      >
        <div className="absolute -right-14 -top-14 -z-10 aspect-square size-32 rounded-full bg-violet-700/30"></div>
        <div className="absolute -bottom-14 -left-14 -z-10 aspect-square size-32 rounded-full bg-purple-700/30"></div>
        project name
      </Link>
    </motion.div>
  );
};

export default PortfolioCard;
