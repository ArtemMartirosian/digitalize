import { UTApi } from "uploadthing/server";

export const utapiDeleteFiles = async (fileKeys: string | string[]) => {
  const utapi = new UTApi();
  return await utapi.deleteFiles(fileKeys);
};
