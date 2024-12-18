import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createService } from "../../actions/create-service";
import { ServiceSchema } from "../../schemas/service-schema";
import { ServiceFeatureProps } from "../../types/definitions";

export const useCreateServiceMutation = () => {
  const qc = useQueryClient();
  const queryKey: QueryKey = ["services"];

  return useMutation({
    mutationKey: queryKey,
    mutationFn: async ({
      values,
      features,
    }: {
      values: ServiceSchema;
      features: ServiceFeatureProps[];
    }) => await createService(values, features),
    onSuccess: async data => {
      if (data.error) {
        throw new Error(data.error);
      }

      await qc.cancelQueries({ queryKey });

      qc.setQueryData(queryKey, (oldData: any) => {
        if (!oldData) return oldData;
        const existingServices = oldData.data || [];
        const updatedTeam = [...existingServices, data.newService];
        return updatedTeam;
      });

      await qc.refetchQueries({ queryKey });

      toast.success(data.success);
    },
    onError: error => {
      toast.error("Failed to add new service");
    },
  });
};
