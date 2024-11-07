import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ServiceDataProps } from "@/types/definitions";

interface Props {
  item: ServiceDataProps;
}

export const ServiceCard = ({ item }: Props) => {
  return (
    <div className="bg-gradient-to-br from-emerald-500/30 to-violet-500/30 text-foreground h-56 flex flex-col items-center gap-2.5 p-6 rounded-md border shadow-md text-center relative overflow-hidden">
      <span className=" block absolute -top-[10%] -right-[10%] size-32 aspect-square rounded-full bg-red-500/20 blur-md"></span>
      <span className=" block absolute -bottom-[10%] -left-[10%] size-32 aspect-square rounded-full bg-violet-500/20 blur-md"></span>
      <div className=" z-10">
        <p className=" text-xl font-bold">{item.name}</p>
        <Separator className="bg-foreground" />
        <p className="">Duration {item.duration}</p>
        <Separator className="bg-foreground" />
        <p className=" text-xl font-bold">
          {Number(item.price).toLocaleString()}AMD
        </p>
      </div>
    </div>
  );
};
