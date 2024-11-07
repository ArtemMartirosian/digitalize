import { ListItems } from "@/components/ListItems";
import { DASHBOARD_LINKS } from "../constants/dashboard-links";
import { DashboardActiveLink } from "./DashboardActiveLink";

export const DisplayDashboardSidebarLinks = () => {
  return (
    <ul className="flex h-fit w-full flex-col gap-1">
      <ListItems
        items={DASHBOARD_LINKS}
        render={item => (
          <li key={item.href} className="h-10 w-full">
            <DashboardActiveLink href={item.href}>{item.name}</DashboardActiveLink>
          </li>
        )}
      />
    </ul>
  );
};
