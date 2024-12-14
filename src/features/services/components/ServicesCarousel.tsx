import { ListItems } from "@/components/ListItems";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ServiceCard } from "./ServiceCard";
import { Service } from "@prisma/client";

interface Props {
  services: Service[];
}

export const ServicesCarousel = ({ services }: Props) => {
  return (
    <div className="relative flex w-full items-center gap-4">
      <Carousel className="w-full" opts={{ align: "start" }}>
        <CarouselContent className="-ml-2 py-4 md:-ml-4">
          <ListItems
            items={services}
            render={item => (
              <CarouselItem
                key={item.name}
                className="ml-2 min-w-72 basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <ServiceCard item={item} />
              </CarouselItem>
            )}
          />
        </CarouselContent>
      </Carousel>
    </div>
  );
};
