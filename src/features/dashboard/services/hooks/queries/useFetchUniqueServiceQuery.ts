import { useQuery } from "@tanstack/react-query";
import { fetchUniqueService } from "../../actions/fetch-unique-service";

export const useFetchUniqueServiceQuery = (id: string) => {
  return useQuery({
    queryKey: ["services", id],
    queryFn: async () => await fetchUniqueService(id),
    enabled: !!id,
  });
};
