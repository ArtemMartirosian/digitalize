import { useQuery } from "@tanstack/react-query";
import { fetchServices } from "../../actions/fetch-services";

export const useFetchServicesQuery = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: async () => await fetchServices(),
  });
};
