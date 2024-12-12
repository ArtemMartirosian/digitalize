"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Loading } from "./Loading";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  title: string;
  description?: string;
  isPending: boolean;
}

export const DeleteDialog = ({
  isOpen,
  onClose,
  onDelete,
  isPending,
  title,
  description = "Are you sure you want to delete?",
}: Props) => {
  return (
    <Dialog defaultOpen={isOpen} open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="flex flex-col items-start">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="flex w-full items-center justify-end gap-2">
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="destructive" onClick={onDelete} disabled={isPending}>
            Delete {isPending && <Loading />}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
