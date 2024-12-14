import { ListItems } from "@/components/ListItems";
import { Loading } from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { serviceSchema, ServiceSchema } from "../schemas/service-schema";
import { ServiceFeauterCard } from "./ServiceFeauterCard";
import { useState } from "react";
import { v4 } from "uuid";
import { ServiceFeatureProps } from "../types/definitions";
import { useUpdateServiceMutation } from "../hooks/mutations/useUpdateServiceMutation";
import { Service } from "@prisma/client";

interface Props {
  data: Service;
  onClose: () => void;
}

export const ServiceEditForm = ({ data, onClose }: Props) => {
  const { isPending, mutateAsync } = useUpdateServiceMutation();
  const [featureValue, setFeatureValue] = useState<string>("");

  const [features, setFeatures] = useState<ServiceFeatureProps[]>(
    data.features.map(item => ({ id: v4(), feature: item })) || []
  );

  const onAddFeature = () => {
    if (!featureValue || !featureValue.trim()) return; // Check for both null and empty value
    setFeatures(prev => [...prev, { id: v4(), feature: featureValue }]);
    setFeatureValue(""); // Clear the input after adding the feature
  };

  const form = useForm<ServiceSchema>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      name: data.name || "",
      price: data.price || "",
    },
  });

  const onSubmit = form.handleSubmit(async (values: ServiceSchema) => {
    if (!data) return;
    await mutateAsync({ id: data.id, values, features }, { onSuccess: () => onClose() });
  });

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
