import { ListItems } from "@/components/ListItems";
import { fetchTechnologies } from "@/features/dashboard/technologies/actions/fetch-technologies";
import Marquee from "react-fast-marquee";
import { GradientShadow } from "../../../components/GradientShadow";
import { TechnologiesMotionWrapper } from "./TechnologiesMotionWrapper";
import { TechnologyCard } from "./TechnologyCard";

export const Technologies = async () => {
  const data = await fetchTechnologies();

  if (!data.data || !data.data.length) return null;

  return (
    <TechnologiesMotionWrapper>
      <GradientShadow position="left" />
      <Marquee direction="left" loop={0} autoFill className="py-2">
        <ListItems
          items={data.data}
          render={(item, index) => <TechnologyCard key={item.id} item={item} index={index} />}
        />
      </Marquee>
      <GradientShadow position="right" />
    </TechnologiesMotionWrapper>
  );
};
