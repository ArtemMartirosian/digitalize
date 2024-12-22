"use client";

import { ListItems } from "@/components/ListItems";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Team } from "@prisma/client";
import { TeamMemberCard } from "./TeamMemberCard";
import { Loading } from "@/components/Loading";

interface Props {
  members: Team[];
}

export const RenderTeamMembersWrapper = ({ members }: Props) => {
  const { width } = useWindowSize();

  if (!width) return <Loading size={32} />;

  return width <= 768 ? (
    <Carousel className="w-full" opts={{ align: "start" }}>
      <CarouselContent className="-ml-2 py-2 md:-ml-4">
        <ListItems
          items={members}
          render={item => (
            <CarouselItem key={item.id} className="flex max-w-40 items-center justify-center">
              <TeamMemberCard item={item} />
            </CarouselItem>
          )}
        />
      </CarouselContent>
    </Carousel>
  ) : (
    <div className="flex w-fit flex-wrap items-center justify-center gap-6">
      <ListItems items={members} render={item => <TeamMemberCard item={item} key={item.id} />} />
    </div>
  );
};
