import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../../actions/fetch-projects";

export const useFetchProjectsQuery = () => {
  return useQuery({
    queryKey: ["portfolio"],
    queryFn: async () => await fetchProjects(),
  });
};
