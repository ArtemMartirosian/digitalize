import { Metadata } from "next";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Dashboard Auth",
  description: "Dashboard auth page of Digitalize",
};

export default function DashboardAuthLayout({ children }: Props) {
  return children;
}
