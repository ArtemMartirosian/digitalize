import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Team } from "@prisma/client";
import Image from "next/image";

interface Props {
  item: Team;
}

export const TeamMemberCard = ({ item }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger>
          <div className="relative aspect-square w-32 rounded-full ring-2 ring-foreground/30 ring-offset-2 ring-offset-background">
            <Image
              src={item.image}
              alt={`${item.firstName} ${item.lastName}`}
              fill
              className="rounded-full border object-cover"
            />
          </div>
        </TooltipTrigger>
        <TooltipContent className="flex flex-col gap-1 text-center">
          <p className="text-lg font-bold">
            {item.firstName} {item.lastName}
          </p>
          <span className="text-sm font-semibold text-background/70">
            {item.professionPosition}
          </span>
          {item.companyPosition && (
            <span className="text-sm font-semibold text-background/70">{item.companyPosition}</span>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
