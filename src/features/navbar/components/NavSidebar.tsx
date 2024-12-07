import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { DisplayNavbarLinks } from "./DisplayNavbarLinks";
import {useTranslations} from "next-intl";

export const NavSidebar = () => {
    const t = useTranslations("");
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer">
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4">
        <SheetHeader>
          <SheetTitle>{t("menu")}</SheetTitle>
        </SheetHeader>
        <Separator />
        <DisplayNavbarLinks orientation="vertical" />
      </SheetContent>
    </Sheet>
  );
};
