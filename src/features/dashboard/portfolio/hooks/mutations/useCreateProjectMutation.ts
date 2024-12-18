import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { PortfolioSchema } from "../../schemas/portfolio-schema";
import { createProject } from "../../actions/create-project";

export const useCreateProjectMutation = () => {
  const qc = useQueryClient();
  const queryKey: QueryKey = ["portfolio"];

  return useMutation({
    mutationKey: queryKey,
    mutationFn: async (values: PortfolioSchema) => await createProject(values),
    onSuccess: async data => {
      if (data.error) {
        throw new Error(data.error);
      }

      await qc.cancelQueries({ queryKey });

      qc.setQueryData(queryKey, (oldData: any) => {
        if (!oldData) return oldData;
        const existingProjects = oldData.data || [];
        return [...existingProjects, data.project];
      });

      await qc.refetchQueries({ queryKey });

      toast.success(data.success);
    },
    onError: error => {
      toast.error("Failed to add new project");
    },
  });
};
