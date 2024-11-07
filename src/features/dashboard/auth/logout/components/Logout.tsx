"use client";

import { Button } from "@/components/ui/button";
import { logout } from "../actions/logout";
import { useTransition } from "react";
import { Loading } from "@/components/Loading";

export const Logout = () => {
  const [isPending, startTransition] = useTransition();

  const onLogout = () => {
    startTransition(async () => {
      await logout();
    });
  };

  return (
    <Button onClick={onLogout} disabled={isPending} variant="destructive" className="w-full">
      Logout {isPending && <Loading />}
    </Button>
  );
};
