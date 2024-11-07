import { ReactNode } from "react";

interface ListItemsProps<T> {
  items: T[];
  render: (item: T, index: number) => ReactNode;
}

export const ListItems = <T,>({ items, render }: ListItemsProps<T>) => {
  return items.map((item, index) => render(item, index));
};
