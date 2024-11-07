"use client";

import { Logo } from "@/components/Logo";
import { Languages } from "@/features/translation/components/Languages";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { DisplayNavbarLinks } from "./DisplayNavbarLinks";
import { NavSidebar } from "./NavSidebar";
import { Link } from "@/i18n/routing";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", latest => {
    setIsVisible(lastScrollY === 0 || lastScrollY > latest || latest <= 256);
    setLastScrollY(latest);
  });

  return (
    <motion.header
      className="fixed -top-20 left-1/2 z-40 h-16 w-full max-w-[1440px] -translate-x-1/2 px-2.5"
      initial={{ top: -80 }}
      animate={{
        top: isVisible ? 8 : -80,
      }}
    >
      <motion.nav
        className={cn(
          "navbar-transition flex h-full w-full items-center justify-between rounded-2xl border bg-background/50 px-5 shadow-md backdrop-blur-lg",
          {
            "border-transparent bg-transparent shadow-none backdrop-blur-none": lastScrollY === 0,
          }
        )}
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 2, type: "spring" },
        }}
      >
        <Link href="/" className="text-2xl font-black uppercase">
          <Logo />
        </Link>
        <div className="hidden w-fit items-center gap-6 md:flex">
          <DisplayNavbarLinks orientation="horizontal" />
          <Languages />
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <Languages />
          <NavSidebar />
        </div>
      </motion.nav>
    </motion.header>
  );
};
