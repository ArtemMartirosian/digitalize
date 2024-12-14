import { db } from "@/lib/db";
import { ServicesCarousel } from "./ServicesCarousel";

export const DisplayServices = async () => {
  const services = await db.service.findMany();

  if (!services || !services.length) return <p>No services available</p>;

  return <ServicesCarousel services={services} />;
};
