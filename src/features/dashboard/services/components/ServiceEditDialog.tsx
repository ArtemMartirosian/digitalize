import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { ServiceEditForm } from "./ServiceEditForm";
import { Service } from "@prisma/client";

interface Props {
  data: Service;
}

export const ServiceEditDialog = ({ data }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} defaultOpen={isOpen} onOpenChange={onClose}>
      <Button className="w-full" onClick={onOpen}>
        Edit
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
          <DialogDescription>Edit and update the service</DialogDescription>
        </DialogHeader>
        <ServiceEditForm data={data} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};
