"use client";

import { Separator } from "@/components/ui/separator";
import { Portfolio, Team } from "@prisma/client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  item: Portfolio;
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
      className="group h-fit w-full overflow-hidden rounded-xl border border-violet-800 shadow-[0_2px_5px_blueviolet]"
    >
      <Link
        href={item.url}
        target="_blank"
        className="relative flex flex-col items-center gap-2 overflow-hidden"
      >
        <div className="relative aspect-video w-full">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="transition-all duration-300 group-active:scale-105 lg:group-hover:scale-105"
          />
        </div>
        <div className="absolute -bottom-[12%] left-0 z-20 h-32 w-full rounded-t-[50px] bg-gradient-to-br from-violet-400 to-violet-900 px-6 py-4 transition-all duration-300 group-active:-bottom-[30%] group-active:-left-[0.5%] group-active:-rotate-6 lg:group-hover:-bottom-[30%] lg:group-hover:-left-[0.5%] lg:group-hover:-rotate-6">
          <p className="flex w-fit items-center gap-2 font-medium text-foreground/70">
            {item.name} <ExternalLink size={18} />
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default PortfolioCard;
