import { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: "%s | Digitalize",
    default: "Digitalize",
  },
  description: "Bringing your imagined website to life",
};

export default function RootLayout({ children }: Props) {
  return children;
}
