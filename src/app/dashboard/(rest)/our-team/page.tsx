import { OurTeamForm } from "@/features/dashboard/our-team/components/OurTeamForm";
import { db } from "@/lib/db";

export default async function OurTeamPage() {
  return (
    <div>
      <OurTeamForm />
    </div>
  );
}
