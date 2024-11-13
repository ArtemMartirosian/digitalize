import { Service } from "@prisma/client";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteService } from "../../actions/delete-feature";

type QueryData = { data: Service[] };

export const useDeleteServiceMutation = () => {
  const qc = useQueryClient();
  const queryKey: QueryKey = ["services"];

  return useMutation({
    mutationKey: queryKey,
    mutationFn: async (id: string) => await deleteService(id),
    onSuccess: data => {
      if (data.error) {
        throw new Error(data.error);
      }

      qc.cancelQueries({ queryKey });

      qc.setQueryData(queryKey, (oldData: QueryData) => {
        if (!oldData || !oldData.data) return oldData;
        // Ensure oldData.data exists before attempting to filter
        const updatedServices = oldData.data.filter(
          (item: any) => item.id !== data.deletedService?.id
        );
        return { ...oldData, data: updatedServices };
      });

      toast.success(data.success);
    },
    onError: (error: any) => {
      console.error("Error deleting service:", error);
      toast.error(`Error deleting service: ${error?.message || "Unknown error"}`);
    },
    onSettled: async () => {
      await qc.invalidateQueries({ queryKey });
    },
  });
};
