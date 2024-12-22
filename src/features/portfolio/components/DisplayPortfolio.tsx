import { ListItems } from "@/components/ListItems";
import { fetchTeam } from "@/features/dashboard/our-team/actions/fetch-team";
import PortfolioCard from "@/features/portfolio/components/PortfolioCard";
import { db } from "@/lib/db";

const DisplayPortfolio = async () => {
  const portfolio = await db.portfolio.findMany();

  if (!portfolio || !portfolio.length) return <p>No portfolio available</p>;

  return (
    <div className="relative grid w-full grid-cols-minmax-320 gap-4">
      <ListItems
        items={portfolio}
        render={(item, index) => <PortfolioCard key={item.id} item={item} index={index} />}
      />
    </div>
  );
};

export default DisplayPortfolio;
