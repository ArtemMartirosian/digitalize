"use client";

import { useWindowSize } from "@/hooks/useWindowSize";
import { Service } from "@prisma/client";
import { ServicesCarousel } from "./ServicesCarousel";
import { ListItems } from "@/components/ListItems";
import { ServiceCard } from "./ServiceCard";
import { Loading } from "@/components/Loading";

interface Props {
  services: Service[];
}

export const RenderServices = ({ services }: Props) => {
  const { width } = useWindowSize();

  if (!width) return <Loading size={32} />;

  return width <= 768 ? (
    <ServicesCarousel services={services} />
  ) : (
    <div className="flex w-fit flex-wrap items-center justify-center gap-6">
      <ListItems items={services} render={item => <ServiceCard key={item.id} item={item} />} />
    </div>
  );
};
