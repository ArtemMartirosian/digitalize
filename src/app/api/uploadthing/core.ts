import { getServerUser } from "@/server/get-server-user";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = async () => {
  return await getServerUser();
};

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "16MB", maxFileCount: 1 } })
    .middleware(async () => {
      const user = await auth();

      if (!user) throw new UploadThingError("Unauthorized");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      try {
        return { name: file.name, key: file.key, url: file.url, uploaderId: metadata.userId };
      } catch (error) {
        console.error("Error during media upload completion:", error);
        throw new UploadThingError("Failed to complete media upload.");
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
