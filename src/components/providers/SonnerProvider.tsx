"use client";

import { ToasterProps } from "sonner";
import { Toaster } from "../ui/sonner";

interface Props {
  position?: ToasterProps["position"];
}

export const SonnerProvider = ({ position = "bottom-right" }: Props) => {
  return (
    <Toaster
      richColors
      position={position}
      closeButton
      duration={3000}
      className="z-[100]"
    />
  );
};
