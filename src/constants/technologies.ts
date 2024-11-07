import { TechnologyDataProps } from "@/types/definitions";
import html from "@/assets/technologies/html.png";
import css from "@/assets/technologies/css.png";
import tailwind from "@/assets/technologies/tailwind.png";
import typescript from "@/assets/technologies/typescript.png";
import react from "@/assets/technologies/react.png";
import next from "@/assets/technologies/next.png";
import laravel from "@/assets/technologies/laravel.png";
import node from "@/assets/technologies/node.png";

export const TECHNOLOGIES: TechnologyDataProps[] = [
  {
    technologyName: "HTML5",
    image: html.src,
  },
  {
    technologyName: "CSS",
    image: css.src,
  },
  {
    technologyName: "TailwindCSS",
    image: tailwind.src,
  },
  {
    technologyName: "TypeScript",
    image: typescript.src,
  },
  {
    technologyName: "React",
    image: react.src,
  },
  {
    technologyName: "NextJS",
    image: next.src,
  },
  {
    technologyName: "NodeJS",
    image: node.src,
  },
  {
    technologyName: "Laravel",
    image: laravel.src,
  },
];
