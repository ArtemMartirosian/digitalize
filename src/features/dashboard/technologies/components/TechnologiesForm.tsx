"use client";

import { UploadButton } from "@/utils/uploadthing";
import { toast } from "sonner";
import { useCreateTechnology } from "../hooks/mutations/useCreateTechnology";

export const TechnologiesForm = () => {
  const { mutateAsync } = useCreateTechnology();

  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={async res => {
        const file = res.pop();
        if (file) {
          await mutateAsync({ file: file.url, fileKey: file.key });
        }
      }}
      onUploadError={error => {
        toast.error(error.message);
      }}
      className="w-fit"
    />
  );
};
