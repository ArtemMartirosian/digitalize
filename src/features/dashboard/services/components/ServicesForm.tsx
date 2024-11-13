"use client";

import { ListItems } from "@/components/ListItems";
import { Loading } from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  serviceDefaultValues,
  serviceSchema,
  ServiceSchema,
} from "@/features/dashboard/services/schemas/service-schema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
import { useCreateServiceMutation } from "../hooks/mutations/useCreateServiceMutation";
import { ServiceFeatureProps } from "../types/definitions";
import { ServiceFeauterCard } from "./ServiceFeauterCard";

export const ServicesForm = () => {
  const [isPending, startTransition] = useTransition();
  const { mutateAsync } = useCreateServiceMutation();
  const [features, setFeatures] = useState<ServiceFeatureProps[]>([]);
  const [featureValue, setFeatureValue] = useState<string>("");

  const form = useForm<ServiceSchema>({
    resolver: zodResolver(serviceSchema),
    defaultValues: serviceDefaultValues,
  });

  const onAddFeature = () => {
    if (!featureValue || !featureValue.trim()) return; // Check for both null and empty value
    setFeatures(prev => [...prev, { id: v4(), feature: featureValue }]);
    setFeatureValue(""); // Clear the input after adding the feature
  };

  const onSubmit = form.handleSubmit((values: ServiceSchema) => {
    startTransition(async () => {
      const { success } = await mutateAsync({ values, features });
      if (success) {
        form.reset();
        setFeatureValue("");
        setFeatures([]);
      }
    });
  });

  console.log(features);

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input disabled={isPending} {...field} placeholder="Service name" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input disabled={isPending} {...field} placeholder="Service price" />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex w-full gap-2">
          <Input
            disabled={isPending}
            value={featureValue}
            onChange={e => setFeatureValue(e.target.value)}
            placeholder="Feature"
          />
          <Button type="button" onClick={onAddFeature}>
            Add
          </Button>
        </div>
        <div
          className={cn(
            "flex w-full flex-wrap gap-2",
            isPending && "pointer-events-none opacity-80"
          )}
        >
          {features.length ? (
            <ListItems
              items={features}
              render={item => (
                <ServiceFeauterCard key={item.id} item={item} setFeatures={setFeatures} />
              )}
            />
          ) : (
            <p className="text-sm">No features</p>
          )}
        </div>
        <Button disabled={isPending}>Add new service {isPending && <Loading size={16} />}</Button>
      </form>
    </Form>
  );
};
