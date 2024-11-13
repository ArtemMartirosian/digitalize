"use client";

import React from "react";
import { useFetchTeam } from "../hooks/queries/useFetchTeam";
import { Loading } from "@/components/Loading";
import { ListItems } from "@/components/ListItems";
import { DashboardTeamMemberCard } from "./DashboardTeamMemberCard";

export const DisplayDashboardTeam = () => {
  const { data, status } = useFetchTeam();

  if (status === "pending") return <Loading />;

  if (status === "error") return <p>Failed to load team</p>;

  if (status === "success" && !data.length) return <p>No team</p>;

  return (
    <div className="grid h-fit w-full grid-cols-minmax-256 gap-3">
      <ListItems
        items={data}
        render={item => <DashboardTeamMemberCard key={item.id} item={item} />}
      />
    </div>
  );
};
