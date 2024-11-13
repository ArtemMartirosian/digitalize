import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { ServiceEditForm } from "./ServiceEditForm";

interface Props {
  id: string;
}

export const ServiceEditDialog = ({ id }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
          <DialogDescription>Edit and update the service</DialogDescription>
        </DialogHeader>
        <ServiceEditForm id={id} />
      </DialogContent>
    </Dialog>
  );
};
