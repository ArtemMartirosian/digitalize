import { SubTitle } from "@/components/SubTitle";
import { ServicesCarousel } from "./ServicesCarousel";

export const Services = () => {
  return (
    <section className=" w-full flex flex-col items-center gap-4">
      <SubTitle>Services</SubTitle>
      <ServicesCarousel />
    </section>
  );
};
