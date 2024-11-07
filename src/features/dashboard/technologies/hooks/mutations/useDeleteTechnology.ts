import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteTechnologyFile } from "../../actions/delete-technology-file";

export const useDeleteTechnology = () => {
  const qc = useQueryClient();
  const queryKey: QueryKey = ["technologies"]; // Query key for the list of technologies

  return useMutation({
    mutationKey: queryKey,
    mutationFn: async ({ id, fileKey }: { id: string; fileKey: string }) =>
      await deleteTechnologyFile(id, fileKey),

    onSuccess: async data => {
      if (data.error) {
        console.log(data.error);
        toast.error(data.error);
        throw new Error(data.error);
      }

      // Optimistically update the technologies list in the cache
      qc.setQueryData(queryKey, (oldData: any) => {
        if (!oldData) return oldData;

        // Filter out the deleted file from the technologies list
        const updatedTechnologies = oldData.data.filter(
          (item: any) => item.id !== data.deletedFile?.id
        );

        // Return the updated list of technologies
        return { ...oldData, data: updatedTechnologies };
      });

      // Optionally show a success toast notification
      toast.success(data.success);

      // No need to refetch because we've updated the cache optimistically
    },
    onError: error => {
      console.error("Error deleting technology file:", error);
      toast.error(`Error deleting file: ${error.message || "Unknown error"}`);
    },
  });
};
