import { ServicesForm } from "@/features/dashboard/services/components/ServicesForm";
import { DisplayServices } from "./DisplayServices";

export const ServicesTemplate = () => {
  return (
    <section className="flex w-full flex-col items-center gap-16">
      <ServicesForm />
      <DisplayServices />
    </section>
  );
};
