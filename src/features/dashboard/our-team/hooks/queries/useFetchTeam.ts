import { useQuery } from "@tanstack/react-query";
import { fetchTeam } from "../../actions/fetch-team";

export const useFetchTeam = () => {
  return useQuery({ queryKey: ["team"], queryFn: async () => await fetchTeam() });
};
