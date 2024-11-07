import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { routing, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

export const TranslationsSelect = () => {
  const { locale } = useParams<{ locale: string }>();
  const router = useRouter();

  const onChangeLanguage = (value: string) => {
    router.push(value);
  };

  return (
    <Select onValueChange={onChangeLanguage}>
      <SelectTrigger className="uppercase min-w-16">{locale}</SelectTrigger>
      <SelectContent>
        {routing.locales.map((item) => (
          <SelectItem value={item} key={item} className="uppercase">
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
