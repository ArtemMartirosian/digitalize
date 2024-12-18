import { Separator } from "@/components/ui/separator";
import { DisplayProjects } from "@/features/dashboard/portfolio/components/DisplayProjects";
import { PortfolioForm } from "@/features/dashboard/portfolio/components/PortfolioForm";

export default function PortfolioPage() {
  return (
    <section className="flex w-full flex-col gap-6">
      <PortfolioForm />
      <Separator />
      <DisplayProjects />
    </section>
  );
}
