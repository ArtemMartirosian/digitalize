import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateService } from "../../actions/update-service";
import { ServiceSchema } from "../../schemas/service-schema";
import { ServiceFeatureProps } from "../../types/definitions";

export const useUpdateServiceMutation = () => {
  const qc = useQueryClient();
  const queryKey: QueryKey = ["services"];

  return useMutation({
    mutationKey: queryKey,
    mutationFn: async ({
      id,
      values,
      features,
    }: {
      id: string;
      values: ServiceSchema;
      features: ServiceFeatureProps[];
    }) => await updateService(id, values, features),
    onSuccess: async data => {
      if (data.error) {
        throw new Error(data.error);
      }

      await qc.cancelQueries({ queryKey });

      qc.setQueryData(queryKey, (oldData: any) => {
        if (!oldData) return oldData;
        const existingServices = oldData.data || [];
        const updatedService = [...existingServices, data.updatedService];
        return updatedService;
      });

      await qc.refetchQueries({ queryKey });

      toast.success(data.success);
    },
    onError: error => {
      toast.error("Failed to add new team member");
    },
  });
};
