import React from 'react';
import {Team} from "@prisma/client";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { HoverableCard } from '@/components/HoverableCard';

interface Props {
    item: Team;
}

const PortfolioCard = ({ item }: Props) => {

    return (
        <TooltipProvider>
            <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                    <HoverableCard className='not-hover-item transition-all duration-500'><Link href='https://www.youtube.com/' target='_blank' className="relative w-full flex flex-col gap-2 h-fit rounded-md overflow-hidden bg-primary-foreground opacity-[0.95] p-2">
                        <div className="relative w-full aspect-video" >
                            <Image
                                src={item.image}
                                alt={`${item.firstName} ${item.lastName}`}
                                fill
                                className=" border object-cover"
                            />
                        </div>
                        <div className="w-full flex flex-col items-center gap-1 text-center">
                        <p>Project name</p>
                        </div>
                    </Link></HoverableCard>
                </TooltipTrigger>
                <TooltipContent   className="flex flex-col gap-1 text-center">
                    <p className="text-lg font-bold">
                       Languages : Next js , Laravel 
                    </p>
                    <span className="text-sm font-semibold text-background/70">
           Company :  {item.professionPosition}
          </span>
                    {item.companyPosition && (
                        <span className="text-sm font-semibold text-background/70">{item.companyPosition}</span>
                    )}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default PortfolioCard;