import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TeamMemberDataProps } from "@/types/definitions";

interface Props {
  item: TeamMemberDataProps;
}

export const TeamMemberCard = ({ item }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger>
          <div className=" w-32 aspect-square rounded-full bg-violet-500 ring-2 ring-offset-2 ring-foreground/30 ring-offset-background"></div>
        </TooltipTrigger>
        <TooltipContent className=" text-center">
          <p className=" text-lg font-bold">{item.fullName}</p>
          <span className="text-sm font-semibold text-background/70">
            {item.position}
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
