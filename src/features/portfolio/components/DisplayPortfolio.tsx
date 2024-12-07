import React from 'react';
import {ListItems} from "@/components/ListItems";
import {fetchTeam} from "@/features/dashboard/our-team/actions/fetch-team";
import PortfolioCard from "@/features/portfolio/components/PortfolioCard";

const DisplayPortfolio = async () => {
    const team = await fetchTeam();

    return (
        <div className="relative w-full grid grid-cols-minmax-320 gap-2 not-hover-container">
            <ListItems
                items={[...team , ...team , ...team , ...team , ...team , ...team , ...team , ...team ,...team ]}
                render={item => (
                    <PortfolioCard item={item} />
                )}
            />
        </div>
    );
};

export default DisplayPortfolio;