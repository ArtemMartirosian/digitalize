import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ServiceDataProps } from "@/types/definitions";
import {Barlow} from "next/font/google";
import {cn} from "@/lib/utils";

interface Props {
  item: ServiceDataProps;
}

const barlow = Barlow({subsets: ["latin"], weight: ["400", "500", "900"]})

export const ServiceCard = ({ item }: Props) => {
  return (
    <div className={cn("bg-muted text-foreground flex flex-col justify-between h-56 items-center gap-2.5 p-6 rounded-sm border-2 border-muted-foreground/40 shadow-md text-center relative overflow-hidden", barlow.className)}>
      {/*<span className=" block absolute -top-[10%] -right-[10%] size-32 aspect-square rounded-full bg-red-500/20 blur-md"></span>*/}
      {/*<span className=" block absolute -bottom-[10%] -left-[10%] size-32 aspect-square rounded-full bg-violet-500/20 blur-md"></span>*/}
        <p className=" text-xl uppercase tracking-wider font-bold">{item.name}</p>
        <Separator className="bg-muted-foreground/40" />
        <p className="">Duration {item.duration}</p>
        <Separator className="bg-muted-foreground/40" />
        <p className=" text-xl font-bold">
          {Number(item.price).toLocaleString()}AMD
        </p>
    </div>
  );
};
