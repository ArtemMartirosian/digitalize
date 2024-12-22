"use client";

import { DeleteDialog } from "@/components/DeleteDialog";
import { Loading } from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Portfolio } from "@prisma/client";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDeleteProjectMutation } from "../hooks/mutations/useDeleteProjectMutation";

interface Props {
  item: Portfolio;
}

export const PortfolioCard = ({ item }: Props) => {
  const { mutateAsync, isPending } = useDeleteProjectMutation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onDelete = async () => {
    await mutateAsync({ id: item.id, imageKey: item.imageKey });
  };

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <div className="relative flex w-full flex-col items-center gap-2 rounded-sm border border-dashed border-muted p-2">
      <DeleteDialog
        isOpen={isOpen}
        onClose={onClose}
        isPending={isPending}
        title={`Delete portfolio ${item.name}`}
        onDelete={onDelete}
      />
      <Button
        size="icon"
        variant="destructive"
        className="absolute -right-2 -top-2 z-10 rounded-full"
        disabled={false}
        onClick={onOpen}
      >
        {false ? <Loading size={16} /> : <X size={16} />}
      </Button>
      <div className="relative aspect-video w-full border border-muted bg-muted/50">
        <Image src={item.image} alt={item.name} fill />
      </div>
      <Link href={item.url} target="_blank" className="underline underline-offset-4">
        {item.name}
      </Link>
    </div>
  );
};
