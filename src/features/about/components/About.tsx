import { SubTitle } from "@/components/SubTitle";
import { Translate } from "@/components/Translate";
import { db } from "@/lib/db";

export const About = async () => {
  const about = await db.about.findFirst();

  if (!about) return null;

  const { about_am, about_en, about_ru } = about;

  return (
    <section className="flex w-full flex-col gap-4 text-center">
      <SubTitle>About us</SubTitle>
      <p className="whitespace-pre-line text-start">
        <Translate translations={{ am: about_am, en: about_en, ru: about_ru }} />
      </p>
    </section>
  );
};
