"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PortfolioSchema, portfolioSchema } from "../schemas/portfolio-schema";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateProjectMutation } from "../hooks/mutations/useCreateProjectMutation";
import { Loading } from "@/components/Loading";
import { useState } from "react";
import { UploadButton } from "@/utils/uploadthing";
import { toast } from "sonner";
import Image from "next/image";
import { cn } from "@/lib/utils";

const defaultValues = { image: null, key: null };

export const PortfolioForm = () => {
  const { mutateAsync, isPending } = useCreateProjectMutation();
  const [file, setFile] = useState<{ image: string | null; key: string | null }>(defaultValues);

  const form = useForm({
    resolver: zodResolver(portfolioSchema),
    defaultValues: { name: "", url: "" },
  });

  const onSubmit = form.handleSubmit(async (values: PortfolioSchema) => {
    if (!file.image || !file.key) {
      toast.error("Please choose a file");
      return;
    }
    await mutateAsync(
      { values, file: file.image, fileKey: file.key },
      {
        onSuccess: () => {
          setFile(defaultValues);
          form.reset();
        },
      }
    );
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="mx-auto flex w-full max-w-[32rem] flex-col gap-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} disabled={isPending} placeholder="Project name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} disabled={isPending} placeholder="Project URL" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full items-start gap-6">
          <UploadButton
            disabled={isPending}
            endpoint="imageUploader"
            onClientUploadComplete={async res => {
              const file = res.pop();
              if (file) {
                setFile({ image: file.url, key: file.key });
              }
            }}
            onUploadError={error => {
              toast.error(error.message);
            }}
            className="w-fit"
          />
          {file.image && (
            <div
              className={cn(
                "relative aspect-video flex-1 border border-muted bg-muted/50 p-2",
                isPending && "opacity-80"
              )}
            >
              <Image src={file.image} alt={file.image} fill />
            </div>
          )}
        </div>
        <Button className="w-full" disabled={isPending || !file.image}>
          Submit {isPending && <Loading size={16} />}
        </Button>
      </form>
    </Form>
  );
};
