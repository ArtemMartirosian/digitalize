"use client";

import { Loading } from "@/components/Loading";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { login } from "../actions/login";
import { loginSchema, LoginSchema } from "../schemas/login-schema";
import { Eye, EyeOff } from "lucide-react";

export const DashboardLoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [type, setType] = useState<"text" | "password">("password");

  const onToggleType = () => {
    setType(prev => (prev === "password" ? "text" : "password"));
  };

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: { password: "", username: "" },
  });

  const onSubmit = form.handleSubmit((values: LoginSchema) => {
    startTransition(async () => {
      const { error, success } = await login(values);
      error ? toast.error(error) : toast.success(success);
      if (success) {
        router.replace("/dashboard");
      }
    });
  });

  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        className="flex w-full max-w-xl flex-col items-center gap-2.5 rounded-md border p-6 shadow-md"
      >
        <Logo className="mb-4 text-4xl font-bold uppercase" />
        <Separator className="mb-4" />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  className="h-fit py-3.5"
                  placeholder="Username"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <div className="flex w-full items-center gap-2">
                <FormControl>
                  <Input
                    type={type}
                    {...field}
                    disabled={isPending}
                    className="h-fit py-3.5"
                    placeholder="Password"
                  />
                </FormControl>
                <Button
                  type="button"
                  disabled={isPending}
                  size="icon"
                  variant="outline"
                  className="aspect-square size-10 rounded-full border text-muted-foreground"
                  onClick={onToggleType}
                >
                  {type === "password" ? <Eye size={16} /> : <EyeOff size={16} />}
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending} className="h-fit w-full py-3.5">
          Login {isPending && <Loading />}
        </Button>
      </form>
    </Form>
  );
};
