import { Loading } from "@/components/Loading";

export default function RestDashboardLoadingPage() {
  return (
    <section className="flex w-full items-center justify-center p-16">
      <Loading size={32} />
    </section>
  );
}
