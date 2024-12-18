"use client";

import { Portfolio } from "@prisma/client";
import Link from "next/link";

interface Props {
  item: Portfolio;
}

export const PortfolioCard = ({ item }: Props) => {
  return (
    <Link
      href={item.url}
      target="_blank"
      className="flex w-full items-center justify-center rounded-sm border border-dashed border-muted p-8"
    >
      {item.name}
    </Link>
  );
};
