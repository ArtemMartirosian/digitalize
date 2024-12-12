"use client";

import { Team } from "@prisma/client";
import Image from "next/image";
import { useDeleteMember } from "../hooks/mutations/useDeleteMember";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Loading } from "@/components/Loading";
import { useState } from "react";
import { DeleteDialog } from "@/components/DeleteDialog";

interface Props {
  item: Team;
}

export const DashboardTeamMemberCard = ({ item }: Props) => {
  const { mutateAsync, isPending } = useDeleteMember();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onDeleteMember = async () => {
    await mutateAsync({ id: item.id, imageKey: item.imageKey });
  };

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <div
      className={cn(
        "group relative flex max-w-xs flex-col items-center gap-1 rounded-md border bg-muted p-4",
        isPending && "opacity-80 backdrop-brightness-50"
      )}
    >
      <DeleteDialog
        onClose={onClose}
        onDelete={onDeleteMember}
        isOpen={isOpen}
        isPending={isPending}
        title={`Delete team member ${item.firstName} ${item.lastName}`}
      />
      <Button
        variant="destructive"
        size="icon"
        className="absolute right-2 top-2 z-10 rounded-full opacity-0 transition-all group-hover:opacity-100"
        onClick={onOpen}
      >
        {isPending ? <Loading size={16} /> : <X size={16} />}
      </Button>
      <div className="relative size-24 overflow-hidden rounded-full">
        <Image
          src={item.image}
          alt={`${item.firstName} ${item.lastName}`}
          fill
          className="rounded-full border object-cover"
        />
      </div>
      <p className="font-bold">
        {item.firstName} {item.lastName}
      </p>
      <span className="text-sm font-semibold text-muted-foreground">{item.professionPosition}</span>
      {item.companyPosition !== item.professionPosition && (
        <span className="text-sm font-semibold text-muted-foreground">{item.companyPosition}</span>
      )}
    </div>
  );
};
