import { Logo } from "@/components/Logo";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Separator } from "@/components/ui/separator";
import { DisplayDashboardSidebarLinks } from "./DisplayDashboardSidebarLinks";
import { Logout } from "../../auth/logout/components/Logout";
import { getServerUser } from "@/server/get-server-user";

export const DashboardSidebar = async () => {
  const user = await getServerUser();
  if (!user) return null;

  return (
    <aside className="sticky left-0 top-0 flex h-dvh w-full flex-col justify-between bg-muted-foreground p-3 text-white/80 dark:bg-muted">
      <div className="flex w-full flex-col gap-2.5">
        <Link href="/" className="text-2xl font-bold uppercase">
          <Logo />
        </Link>
        <Separator className="bg-white/30" />
        <DisplayDashboardSidebarLinks />
      </div>
      <div className="flex w-full flex-col gap-2.5">
        <Separator className="bg-white/30" />
        <ThemeSwitcher />
        <Logout />
        <p className="line-clamp-1 text-center text-sm font-semibold">
          Logged in as {user.username}
        </p>
      </div>
    </aside>
  );
};
