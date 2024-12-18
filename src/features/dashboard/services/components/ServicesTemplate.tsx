import { ServicesForm } from "@/features/dashboard/services/components/ServicesForm";
import { DisplayServices } from "./DisplayServices";
import { Separator } from "@/components/ui/separator";

export const ServicesTemplate = () => {
  return (
    <section className="flex w-full flex-col items-center gap-6">
      <ServicesForm />
      <Separator />
      <DisplayServices />
    </section>
  );
};
