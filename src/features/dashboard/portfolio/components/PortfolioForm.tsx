"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PortfolioSchema, portfolioSchema } from "../schemas/portfolio-schema";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateProjectMutation } from "../hooks/mutations/useCreateProjectMutation";
import { Loading } from "@/components/Loading";

export const PortfolioForm = () => {
  const { mutateAsync, isPending } = useCreateProjectMutation();

  const form = useForm({
    resolver: zodResolver(portfolioSchema),
    defaultValues: { name: "", url: "" },
  });

  const onSubmit = form.handleSubmit(async (values: PortfolioSchema) => {
    await mutateAsync(values, { onSuccess: () => form.reset() });
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
        <Button className="w-full" disabled={isPending}>
          Submit {isPending && <Loading size={16} />}
        </Button>
      </form>
    </Form>
  );
};
