import { useQuery } from "@tanstack/react-query";
import { fetchTechnologies } from "../../actions/fetch-technologies";

export const useFetchTechnologies = () => {
  return useQuery({ queryKey: ["technologies"], queryFn: async () => await fetchTechnologies() });
};
