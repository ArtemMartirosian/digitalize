import { Separator } from "@/components/ui/separator";
import { Barlow } from "next/font/google";
import { cn } from "@/lib/utils";
import { Service } from "@prisma/client";

interface Props {
  item: Service;
}

const barlow = Barlow({ subsets: ["latin"], weight: ["400", "500", "900"] });

export const ServiceCard = ({ item }: Props) => {
  return (
    <div
      className={cn(
        "relative flex h-56 flex-col items-center justify-between gap-2.5 overflow-hidden rounded-sm border-2 border-muted-foreground/40 bg-muted p-6 text-center text-foreground shadow-md",
        barlow.className
      )}
    >
      <p className="text-xl font-bold uppercase tracking-wider">{item.name}</p>
      <Separator className="bg-muted-foreground/40" />
      <Separator className="bg-muted-foreground/40" />
      <p className="text-xl font-bold">{Number(item.price).toLocaleString()}AMD</p>
    </div>
  );
};
