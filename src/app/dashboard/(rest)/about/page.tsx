import { DashboardAboutForm } from "@/features/dashboard/about/components/DashboardAboutForm";
import { db } from "@/lib/db";

export default async function AboutPage() {
  const about = await db.about.findFirst();
  return (
    <section className=" w-full">
      <DashboardAboutForm about={about} />
    </section>
  );
}
