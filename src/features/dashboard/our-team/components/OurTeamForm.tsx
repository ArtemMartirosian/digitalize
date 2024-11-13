"use client";

import { Loading } from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateNewTeamMember } from "../hooks/mutations/useCreateNewTeamMember";
import { teamDefaultValues, teamSchema, TeamSchema } from "../schemas/teamSchema";
import { TeamUploadFile } from "./TeamUploadFile";

export const OurTeamForm = () => {
  const [isPending, startTransition] = useTransition();
  const { mutateAsync } = useCreateNewTeamMember();
  const [file, setFile] = useState<string | null>(null);
  const [fileKey, setFileKey] = useState<string | null>(null);

  const form = useForm<TeamSchema>({
    resolver: zodResolver(teamSchema),
    defaultValues: teamDefaultValues,
  });

  const onSubmit = form.handleSubmit((values: TeamSchema) => {
    startTransition(async () => {
      if (!file) {
        toast.error("Please choose a file");
        return;
      }
      if (!fileKey) {
        toast.error("File key is missing");
        return;
      }
      const { success } = await mutateAsync({ values, image: file, imageKey: fileKey });
      if (success) {
        form.reset();
        setFile(null);
        setFileKey(null);
      }
    });
  });

  return (
    <div className="flex w-full max-w-3xl gap-16">
      <TeamUploadFile file={file} fileKey={fileKey} setFile={setFile} setFileKey={setFileKey} />
      <Form {...form}>
        <form onSubmit={onSubmit} className="flex h-fit w-full max-w-screen-sm flex-col gap-3">
          <div className="grid w-full grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="First name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="Last name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="professionPosition"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Profession position" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyPosition"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Position at company" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending}>Add member {isPending && <Loading size={16} />}</Button>
        </form>
      </Form>
    </div>
  );
};
