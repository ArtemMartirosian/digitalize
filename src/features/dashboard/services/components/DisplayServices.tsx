"use client";

import React from "react";
import { useFetchServicesQuery } from "../hooks/queries/useFetchServicesQuery";
import { Loading } from "@/components/Loading";
import { ListItems } from "@/components/ListItems";
import { ServiceCard } from "./ServiceCard";

export const DisplayServices = () => {
  const { data, status } = useFetchServicesQuery();
  if (status === "pending") return <Loading />;

  if (status === "error") return <p>Failed to load services</p>;

  if (status === "success" && !data.length) return <p>No services</p>;

  return (
    <div className="grid h-fit w-full grid-cols-minmax-256 gap-3">
      <ListItems items={data} render={item => <ServiceCard key={item.id} item={item} />} />
    </div>
  );
};
