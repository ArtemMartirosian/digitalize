"use client";

import { Technology } from "@prisma/client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  item: Technology;
  index: number;
}

export const TechnologyCard = ({ item, index }: Props) => {
  return (
    <motion.div
      className="mx-1 flex aspect-square w-16 items-center justify-center rounded-md border bg-white p-2.5 shadow-md"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { delay: index * 0.1, type: "spring" },
      }}
    >
      <Image src={item.image} alt={item.image} width={32} height={32} />
    </motion.div>
  );
};
