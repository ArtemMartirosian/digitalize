import { db } from "@/lib/db";
import { useQuery } from "@tanstack/react-query";

export const useFetchAboutQuery = () => {
  return useQuery({
    queryKey: ["about"],
    queryFn: async () => await db.about.findMany(),
  });
};
