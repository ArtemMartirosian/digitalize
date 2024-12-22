import { db } from "@/lib/db";
import { RenderServices } from "./RenderServices";

export const DisplayServices = async () => {
  const services = await db.service.findMany();

  if (!services || !services.length) return <p>No services available</p>;

  return <RenderServices services={services} />;
};
