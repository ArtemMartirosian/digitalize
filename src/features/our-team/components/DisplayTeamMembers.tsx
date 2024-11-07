import { ListItems } from "@/components/ListItems";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TEAM_MEMBERS } from "@/constants/team-members";
import { TeamMemberCard } from "./TeamMemberCard";

export const DisplayTeamMembers = () => {
  return (
    <div className=" w-full flex items-center gap-4 relative">
      <Carousel className=" w-full" opts={{ align: "start" }}>
        <CarouselContent className="-ml-2 md:-ml-4 py-2">
          <ListItems
            items={TEAM_MEMBERS}
            render={(item) => (
              <CarouselItem
                key={item.slug}
                className="max-w-40 flex items-center justify-center"
              >
                <TeamMemberCard item={item} />
              </CarouselItem>
            )}
          />
        </CarouselContent>
      </Carousel>
    </div>
  );
};
