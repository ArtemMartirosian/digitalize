"use client";

import { Loading } from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Technology } from "@prisma/client";
import { X } from "lucide-react";
import Image from "next/image";
import { useState, useTransition } from "react";
import { useDeleteTechnology } from "../hooks/mutations/useDeleteTechnology";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DeleteDialog } from "@/components/DeleteDialog";

interface Props {
  item: Technology;
}

export const DashboardTechnologyCard = ({ item }: Props) => {
  const [isPending, startTransition] = useTransition();
  const { mutateAsync } = useDeleteTechnology();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onDeleteFile = () => {
    startTransition(async () => {
      await mutateAsync({ id: item.id, fileKey: item.imageKey });
    });
  };

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <div className="flex h-full w-full flex-col gap-1">
      <div className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-md border bg-muted p-4 shadow-md">
        <DeleteDialog
          onClose={onClose}
          onDelete={onDeleteFile}
          isOpen={isOpen}
          isPending={isPending}
          title={`Delete technology`}
        />
        <Button
          onClick={onOpen}
          size="icon"
          variant="destructive"
          className="absolute right-2 top-2 z-10 rounded-full opacity-0 transition-all hover:bg-red-600 group-hover:opacity-100"
        >
          {isPending ? <Loading size={16} /> : <X size={16} />}
        </Button>
        <Image
          unoptimized
          key={item.id}
          src={item.image}
          alt=""
          width={128}
          height={128}
          className="object-contain"
        />
      </div>
      {isPending && <span className="text-center text-sm text-destructive">Deleting...</span>}
    </div>
  );
};
