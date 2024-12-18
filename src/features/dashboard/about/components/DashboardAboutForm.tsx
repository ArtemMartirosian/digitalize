"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { About } from "@prisma/client";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { postAbout } from "../actions/post-about";
import { aboutSchema, AboutSchema, getAboutDefaultValues } from "../schemas/about-schema";
import { Loading } from "@/components/Loading";

interface Props {
  about: About | null;
}

export const DashboardAboutForm = ({ about }: Props) => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<AboutSchema>({
    resolver: zodResolver(aboutSchema),
    defaultValues: getAboutDefaultValues(about),
  });

  const onSubmit = form.handleSubmit((values: AboutSchema) => {
    startTransition(async () => {
      const { error, success } = await postAbout(values);
      error ? toast.error(error) : toast.success(success);
    });
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-col gap-4">
          <FormField
            control={form.control}
            name="about_en"
            render={({ field }) => (
              <FormItem>
                <FormLabel>English</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isPending}
                    {...field}
                    rows={12}
                    className="bg-muted-foreground/20"
                    placeholder="About Digitalize EN"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="about_ru"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Russian</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isPending}
                    {...field}
                    rows={12}
                    className="bg-muted-foreground/20"
                    placeholder="About Digitalize RU"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="about_am"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Armenian</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isPending}
                    {...field}
                    rows={12}
                    className="bg-muted-foreground/20"
                    placeholder="About Digitalize AM"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="font-semibold" disabled={isPending}>
          Save {isPending && <Loading />}
        </Button>
      </form>
    </Form>
  );
};