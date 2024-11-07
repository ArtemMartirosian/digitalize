"use client";

import { Switch } from "@/components/ui/switch";
import { useClient } from "@/hooks/useClient";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isClient = useClient();
  const isDark = resolvedTheme === "dark";

  const onSwitchTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!isClient) return null;

  return (
    <div className=" w-fit flex items-center justify-center gap-2 font-semibold">
      <span>Dark Mode:</span>
      <Switch
        onClick={onSwitchTheme}
        className={cn("", isDark && "bg-violet-500")}
        checked={isDark}
      />
      <span>{isDark ? "On" : "Off"}</span>
    </div>
  );
};
