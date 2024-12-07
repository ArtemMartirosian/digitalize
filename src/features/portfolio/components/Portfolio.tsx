import { SubTitle } from "@/components/SubTitle";
import DisplayPortfolio from "@/features/portfolio/components/DisplayPortfolio";
import {useTranslations} from "next-intl";

export const Portfolio = () => {

    const t = useTranslations("");

    return (
        <section className=" w-full flex flex-col items-center gap-4">
            <SubTitle>{t("ourPortfolio")}</SubTitle>
            <DisplayPortfolio/>
        </section>
    );
};
