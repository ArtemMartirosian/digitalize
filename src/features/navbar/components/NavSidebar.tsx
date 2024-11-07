import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { DisplayNavbarLinks } from "./DisplayNavbarLinks";

export const NavSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer">
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <Separator />
        <DisplayNavbarLinks orientation="vertical" />
      </SheetContent>
    </Sheet>
  );
};
