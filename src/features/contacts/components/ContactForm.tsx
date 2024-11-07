"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactsDefaultValues, contactsSchema, ContactsSchema } from "../schemas/conacts-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<ContactsSchema>({
    resolver: zodResolver(contactsSchema),
    defaultValues: contactsDefaultValues,
  });

  const onSubmit = form.handleSubmit((values: ContactsSchema) => {
    startTransition(() => {
      console.log(values);
    });
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="flex w-full max-w-2xl flex-col gap-3">
        <div className="grid w-full grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="First name" />
                </FormControl>
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
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" {...field} placeholder="Email address" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="tel" {...field} placeholder="Phone number" />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea rows={5} {...field} placeholder="Enter your message" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button>Send</Button>
      </form>
    </Form>
  );
};
