import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Service } from "@prisma/client";
import { Check } from "lucide-react";
import { ListItems } from "@/components/ListItems";

interface Props {
  item: Service;
}

export const ServiceCard = ({ item }: Props) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col items-center justify-between gap-2 overflow-hidden rounded-xl border-2 border-violet-500/30 bg-violet-500/20 p-4 text-center text-foreground shadow-md md:w-64"
      )}
    >
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full flex-col gap-4">
          <p className="text-xl font-bold uppercase tracking-wider">{item.name}</p>
          <Separator className="bg-violet-500/30" />
        </div>
        <div className="flex w-full flex-col gap-2 py-2">
          <ListItems
            items={item.features}
            render={(item, index) => (
              <p key={item + index} className="flex items-center gap-2">
                <Check size={20} className="text-violet-500 dark:text-violet-300" /> {item}
              </p>
            )}
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <Separator className="bg-violet-500/30" />
        <p className="text-xl font-bold text-violet-500 dark:text-violet-300">
          {Number(item.price).toLocaleString()}AMD
        </p>
      </div>
    </div>
  );
};
