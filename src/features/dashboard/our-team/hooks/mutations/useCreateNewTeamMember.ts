import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createNewTeamMember } from "../../actions/create-new-team-member";
import { TeamSchema } from "../../schemas/teamSchema";

export const useCreateNewTeamMember = () => {
  const qc = useQueryClient();
  const queryKey: QueryKey = ["team"];

  return useMutation({
    mutationKey: queryKey,
    mutationFn: async ({
      values,
      image,
      imageKey,
    }: {
      values: TeamSchema;
      image: string;
      imageKey: string;
    }) => await createNewTeamMember(values, image, imageKey),
    onSuccess: async data => {
      if (data.error) {
        throw new Error(data.error);
      }

      await qc.cancelQueries({ queryKey });

      qc.setQueryData(queryKey, (oldData: any) => {
        if (!oldData) return oldData;
        const existingTeamMembers = oldData.data || [];
        const updatedTeam = [...existingTeamMembers, data.newTeamMember];
        return updatedTeam;
      });

      await qc.refetchQueries({ queryKey });

      toast.success(data.success);
    },
    onError: error => {
      toast.error("Failed to add new team member");
    },
  });
};
