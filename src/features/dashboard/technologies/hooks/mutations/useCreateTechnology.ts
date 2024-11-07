import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadTechnologyFile } from "../../actions/upload-technology-file";
import { toast } from "sonner";

export const useCreateTechnology = () => {
  const qc = useQueryClient();
  const queryKey: QueryKey = ["technologies"];

  return useMutation({
    mutationKey: queryKey,
    mutationFn: async ({ fileKey, file }: { file: string; fileKey: string }) =>
      await uploadTechnologyFile(file, fileKey),
    onSuccess: async data => {
      if (data.error) {
        console.log(data.error);
        throw new Error(data.error);
      }

      // Optimistically update the query cache
      qc.cancelQueries({ queryKey });

      qc.setQueryData(queryKey, (oldData: any) => {
        if (!oldData) return oldData;

        // Add the newly uploaded file to the cache (Assuming uploadedFile contains id, image, imageKey)
        const updatedTechnologies = [
          ...oldData.data, // This assumes that `oldData` contains an array of technologies in `data`
          {
            id: data.uploadedFile?.id, // The ID of the newly uploaded file
            image: data.uploadedFile?.image, // The image URL of the newly uploaded file
            fileKey: data.uploadedFile?.imageKey, // The file key (if relevant)
          },
        ];

        // Return the updated data with the new file added to the list of technologies
        return { ...oldData, data: updatedTechnologies };
      });

      // Refetch the query to ensure we get the latest data
      await qc.refetchQueries({ queryKey });

      // Optionally, show a success toast to notify the user
      toast.success(data.success);
    },
    onError: error => {
      console.error("Error uploading technology file:", error);
      // Optionally handle error state or show a toast notification
      toast.error(`Error uploading file: ${error || "Unknown error"}`);
    },
  });
};
