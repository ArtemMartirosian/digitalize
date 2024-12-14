"use client";

import { ListItems } from "@/components/ListItems";
import { Loading } from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Service } from "@prisma/client";
import { Check, X } from "lucide-react";
import { useDeleteServiceMutation } from "../hooks/mutations/useDeleteServiceMutation";
import { ServiceEditDialog } from "./ServiceEditDialog";
import { useState } from "react";
import { DeleteDialog } from "@/components/DeleteDialog";

interface Props {
  item: Service;
}

export const ServiceCard = ({ item }: Props) => {
  const { mutateAsync, isPending } = useDeleteServiceMutation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onDelete = async () => {
    await mutateAsync(item.id);
  };

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <div className="relative flex w-full flex-col items-center justify-between gap-4 rounded-sm border bg-muted p-4 shadow-md">
      <DeleteDialog
        onClose={onClose}
        onDelete={onDelete}
        isOpen={isOpen}
        isPending={isPending}
        title={`Delete service ${item.name}`}
      />
      <Button
        size="icon"
        variant="destructive"
        className="absolute -right-2 -top-2 rounded-full"
        disabled={isPending}
        onClick={onOpen}
      >
        {isPending ? <Loading size={16} /> : <X size={16} />}
      </Button>
      <div className="flex w-full grow flex-col gap-2">
        <p className="text-xl font-bold uppercase">{item.name}</p>
        <ul className="flex w-full flex-col gap-1.5">
          <ListItems
            items={item.features}
            render={(item, index) => (
              <li key={index} className="flex w-full items-center gap-2">
                <Check size={16} className="text-green-500" />
                <span>{item}</span>
              </li>
            )}
          />
        </ul>
      </div>
      <Separator className="bg-muted-foreground" />
      <p className="font-bold">{Number(item.price).toLocaleString()}AMD</p>
      <ServiceEditDialog data={item} />
    </div>
  );
};
