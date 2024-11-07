"use client";

import { Loading } from "@/components/Loading";
import { useFetchTechnologies } from "../hooks/queries/useFetchTechnologies";
import { DashboardTechnologyCard } from "./DashboardTechnologyCard";
import { TechnologiesForm } from "./TechnologiesForm";

export const TechnologiesTemplate = () => {
  const { data, status } = useFetchTechnologies();

  return (
    <section className="flex w-full flex-col gap-4">
      <TechnologiesForm />
      {status === "pending" ? (
        <p className="flex items-center gap-2 font-semibold">
          Loading <Loading size={16} />
        </p>
      ) : status === "error" ? (
        <span className="text-destructive">Something went wrong</span>
      ) : (
        <div className="grid-cols-minmax-128 grid h-fit w-full gap-4">
          {data?.data.map(item => <DashboardTechnologyCard key={item.id} item={item} />)}
        </div>
      )}
    </section>
  );
};
