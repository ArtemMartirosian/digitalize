import { Service } from "@prisma/client";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteProject } from "../../actions/delete-project";

type QueryData = { data: Service[] };

export const useDeleteProjectMutation = () => {
  const qc = useQueryClient();
  const queryKey: QueryKey = ["portfolio"];

  return useMutation({
    mutationKey: queryKey,
    mutationFn: async ({ id, imageKey }: { id: string; imageKey: string }) =>
      await deleteProject(id, imageKey),
    onSuccess: data => {
      if (data.error) {
        throw new Error(data.error);
      }

      qc.cancelQueries({ queryKey });

      qc.setQueryData(queryKey, (oldData: QueryData) => {
        if (!oldData || !oldData.data) return oldData;
        // Ensure oldData.data exists before attempting to filter
        const existingProjects = oldData.data.filter(
          (item: any) => item.id !== data.deletedProject?.id
        );
        return { ...oldData, data: existingProjects };
      });

      toast.success(data.success);
    },
    onError: (error: any) => {
      console.error("Error deleting project:", error);

      toast.error(`Error deleting project: ${error?.message || "Unknown error"}`);
    },
    onSettled: async () => {
      await qc.invalidateQueries({ queryKey });
    },
  });
};
