"use client";

import { Loading } from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";
import { deleteMemberFile } from "../actions/delete-member-file";

interface Props {
  file: string | null;
  setFile: (file: string | null) => void;
  fileKey: string | null;
  setFileKey: (fileKey: string | null) => void;
}

export const TeamUploadFile = ({ file, fileKey, setFile, setFileKey }: Props) => {
  const [isPending, startTransition] = useTransition();

  const onDeleteFile = () => {
    startTransition(async () => {
      if (!fileKey) return;
      const { error, success } = await deleteMemberFile(fileKey);
      if (error) {
        toast.error(error);
      } else {
        toast.success(success);
        setFileKey(null);
        setFile(null);
      }
    });
  };

  return !file ? (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={async res => {
        const file = res.pop();
        if (file) {
          setFile(file.url);
          setFileKey(file.key);
        }
      }}
      onUploadError={error => {
        toast.error(error.message);
      }}
      className="w-fit"
    />
  ) : (
    <div className="flex w-fit flex-col gap-2">
      <div
        className={cn(
          "relative flex aspect-square size-32 flex-col gap-2 rounded-full object-cover",
          isPending && "backdrop-brightness-50"
        )}
      >
        <Image src={file} alt={file} fill className="rounded-full border object-cover" />
      </div>
      <Button variant="destructive" disabled={isPending} onClick={onDeleteFile}>
        Remove {isPending && <Loading size={16} />}
      </Button>
    </div>
  );
};
