import { ListItems } from "@/components/ListItems";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { TeamMemberCard } from "./TeamMemberCard";
import { fetchTeam } from "@/features/dashboard/our-team/actions/fetch-team";

export const DisplayTeamMembers = async () => {
  const team = await fetchTeam();

  return (
    <div className="relative flex w-full items-center gap-4">
      <Carousel className="w-full" opts={{ align: "start" }}>
        <CarouselContent className="-ml-2 py-2 md:-ml-4">
          <ListItems
            items={team}
            render={item => (
              <CarouselItem key={item.id} className="flex max-w-40 items-center justify-center">
                <TeamMemberCard item={item} />
              </CarouselItem>
            )}
          />
        </CarouselContent>
      </Carousel>
    </div>
  );
};
