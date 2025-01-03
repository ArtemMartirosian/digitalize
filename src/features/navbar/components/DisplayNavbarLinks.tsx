import { ListItems } from "@/components/ListItems";
import { NAVBAR_LINKS } from "@/constants/navbar-links";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface Props {
  orientation: "vertical" | "horizontal";
}

export const DisplayNavbarLinks = ({ orientation }: Props) => {
  const isVertical = orientation === "vertical";
  const t = useTranslations("");
  return (
    <ul
      className={cn("inline-flex items-center gap-x-4 gap-y-1", {
        "flex-col items-start": isVertical,
      })}
    >
      <ListItems
        items={NAVBAR_LINKS}
        render={item => (
          <li key={item.href} className={cn({ "h-10 w-full": isVertical })}>
            <Link
              href={item.href}
              className={cn("font-medium", {
                "flex h-full w-full items-center": isVertical,
              })}
            >
              {t(item.name)}
            </Link>
          </li>
        )}
      />
    </ul>
  );
};
