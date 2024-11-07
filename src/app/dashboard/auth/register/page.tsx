"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { registerSchema, RegisterSchema } from "@/schemas/register-schema";
import { register } from "@/actions/register";

export default function RegisterPage() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = form.handleSubmit((values: RegisterSchema) => {
    startTransition(async () => {
      await register(values);
    });
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="username" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="username" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button>register </Button>
      </form>
    </Form>
  );
}
