import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteMember } from "@/features/dashboard/our-team/actions/delete-memebr";

export const useDeleteMember = () => {
  const qc = useQueryClient();
  const queryKey: QueryKey = ["team"];

  return useMutation({
    mutationKey: queryKey,
    mutationFn: async ({ id, imageKey }: { id: string; imageKey: string }) =>
      await deleteMember(id, imageKey),
    onSuccess: data => {
      if (data.error) {
        throw new Error(data.error);
      }

      qc.cancelQueries({ queryKey });

      qc.setQueryData(queryKey, (oldData: any) => {
        if (!oldData) return oldData;
        // Ensure oldData.data exists before attempting to filter
        const updatedTeam = oldData.data?.filter((item: any) => item.id !== data.deletedMember?.id);
        return { ...oldData, data: updatedTeam };
      });

      toast.success(data.success);
    },
    onError: (error: any) => {
      console.error("Error deleting team member:", error);
      toast.error(`Error deleting member: ${error?.message || "Unknown error"}`);
    },
  });
};
