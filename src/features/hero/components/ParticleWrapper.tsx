"use client";

import { Particles } from "@/components/Particles";
import { useClient } from "@/hooks/useClient";
import { useTheme } from "next-themes";

export const ParticleWrapper = () => {
  const isClient = useClient();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  if (!isClient) return null;

  return (
    <Particles
      ease={100}
      size={0.5}
      color={isDark ? "#FFFFFF" : "#000000"}
      quantity={300}
      staticity={40}
      className="absolute inset-0 -z-10 h-full"
    />
  );
};
