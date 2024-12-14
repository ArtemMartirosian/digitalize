import React from "react";
import { ListItems } from "@/components/ListItems";
import { fetchTeam } from "@/features/dashboard/our-team/actions/fetch-team";
import PortfolioCard from "@/features/portfolio/components/PortfolioCard";

const DisplayPortfolio = async () => {
  const team = await fetchTeam();

  return (
    <div className="relative grid w-full grid-cols-minmax-256 gap-2">
      <ListItems
        items={[...team, ...team, ...team, ...team, ...team, ...team, ...team, ...team, ...team]}
        render={(item, index) => <PortfolioCard key={item.id} item={item} index={index} />}
      />
    </div>
  );
};

export default DisplayPortfolio;
