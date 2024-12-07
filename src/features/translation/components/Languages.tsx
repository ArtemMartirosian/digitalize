"use client";

import { ListItems } from "@/components/ListItems";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANGUAGES } from "@/constants/languages";
import { usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { LanguagesIcon } from "lucide-react";
import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export const Languages = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const activeLocale = useLocale();
  const t = useTranslations("languages");

  const switchLocaleHandler = (nextLocale: string) => {
    const origin = window.location.origin;
    startTransition(() => {
      router.replace(`${origin + nextLocale + pathname}`);
    });
  };

  return (
    <div className="flex w-fit items-center gap-2.5">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <LanguagesIcon size={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="flex w-fit flex-col gap-1">
          <ListItems
            items={LANGUAGES}
            render={item => (
              <DropdownMenuItem
                disabled={isPending}
                key={item.value}
                className={cn("cursor-pointer", {
                  "pointer-events-none bg-violet-500 text-white":
                    activeLocale === item.value.split("/")[1],
                })}
                onClick={() => switchLocaleHandler(item.value)}
              >
                <Image
                  src={item.flag}
                  alt={item.value}
                  width={20}
                  height={20}
                  className="rounded-full border border-foreground/70"
                />
                <span className="font-semibold">{t(item.name)}</span>
              </DropdownMenuItem>
            )}
          />
        </DropdownMenuContent>
      </DropdownMenu>
      {/* <ListItems
        items={LANGUAGES}
        render={(item) => (
          <button
            disabled={isPending}
            key={item.value}
            className={cn("rounded-full border border-foreground/70", {
              "ring-2 ring-offset-2 ring-offset-background ring-violet-500":
                activeLocale === item.value.split("/")[1],
            })}
            onClick={() => switchLocaleHandler(item.value)}
          >
            <Image src={item.flag} alt={item.value} width={20} height={20} />
          </button>
        )}
      /> */}
    </div>
  );
};
