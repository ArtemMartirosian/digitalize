import { DashboardSidebar } from "@/features/dashboard/sidebar/components/DashboardSidebar";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard of Digitalize",
};

interface Props {
  children: ReactNode;
}

export default async function RestDasboardLayout({ children }: Props) {
  return (
    <section className="grid min-h-dvh w-full grid-cols-dashboard-layout">
      <DashboardSidebar />
      <section className="p-4">{children}</section>
    </section>
  );
}
