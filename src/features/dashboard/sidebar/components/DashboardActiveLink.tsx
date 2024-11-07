"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
}

export const DashboardActiveLink = ({ children, href }: Props) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={cn(
        "flex h-full w-full items-center rounded-md px-2 py-2 font-semibold transition-all",
        isActive ? "bg-violet-500 px-4" : "hover:bg-violet-500/10"
      )}
    >
      {children}
    </Link>
  );
};
