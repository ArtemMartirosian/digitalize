import { ListItems } from "@/components/ListItems";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SERVICES } from "@/constants/services";
import { ServiceCard } from "./ServiceCard";

export const ServicesCarousel = () => {
  return (
    <div className=" w-full flex items-center gap-4 relative">
      <Carousel className=" w-full" opts={{ align: "start" }}>
        <CarouselContent className="-ml-2 md:-ml-4 py-4">
          <ListItems
            items={SERVICES}
            render={(item) => (
              <CarouselItem
                key={item.name}
                className="xl:basis-1/4 lg:basis-1/3 sm:basis-1/2"
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
