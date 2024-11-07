"use client";

import { Button } from "@/components/ui/button";
import { UploadButton, useUploadThing } from "@/utils/uploadthing";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { toast } from "sonner";

export const OurTeamForm = () => {
  const [files, setFiles] = useState<File[] | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { startUpload } = useUploadThing("imageUploader");
  const [uploadedFile, setUploadedFile] = useState<string>("");

  const fileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files;
    if (!newFiles) return null;
    const filesArray = Array.from(newFiles);
    setFiles(filesArray);
  };

  const onUpload = async () => {
    if (!files) return;
    const data = await startUpload(files);
    if (!data) {
      toast.error("Failed to upload");
      return null;
    }
    let fileUrl = "";
    data.forEach(item => {
      fileUrl = item.url;
    });
    setUploadedFile(fileUrl);
  };

  return (
    <div>
      {/* <input ref={inputRef} type="file" className="hidden" onChange={fileHandler} />
      <Button onClick={() => inputRef?.current?.click()}>Choose a file</Button>
      {!!files && (
        <div className="">
          <Image src={uploadedFile} alt="" width={128} height={128} />
          <Button onClick={onUpload}>Upload</Button>
        </div>
      )} */}

      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={res => {
          const fileUrl = res.pop()?.url;
          if (fileUrl) {
            setUploadedFile(fileUrl);
            toast.success("Upload Completed");
          }
        }}
        onUploadError={(error: Error) => {
          toast.error(error.message);
        }}
      />
    </div>
  );
};
