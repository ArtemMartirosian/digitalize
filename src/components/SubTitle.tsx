import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const SubTitle = ({ children }: Props) => {
  return (
    <h2 className=" text-3xl font-bold capitalize whitespace-nowrap">
      {children}
    </h2>
  );
};
