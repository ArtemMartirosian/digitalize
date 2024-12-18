"use client";

import { useFetchProjectsQuery } from "../hooks/queries/useFetchProjectsQuery";
import { ListItems } from "@/components/ListItems";
import Link from "next/link";
import { Loading } from "@/components/Loading";
import { PortfolioCard } from "./PortfolioCard";

export const DisplayProjects = () => {
  const { data, isLoading } = useFetchProjectsQuery();

  if (isLoading) return <Loading />;
  if (!data || !data.length) return <p className="mx-auto">No projects avaliable</p>;

  return (
    <div className="grid w-full grid-cols-minmax-256 gap-2">
      <ListItems items={data} render={item => <PortfolioCard key={item.id} item={item} />} />
    </div>
  );
};
