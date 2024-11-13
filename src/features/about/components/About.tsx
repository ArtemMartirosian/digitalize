import { SubTitle } from "@/components/SubTitle";
import { Translate } from "@/components/Translate";
import { fetchAbout } from "../actions/fetchAbout";

export const About = async () => {
  const { error, about } = await fetchAbout();

  return (
    <section className="flex w-full flex-col gap-4 text-center">
      <SubTitle>About us</SubTitle>
      {error !== null && about === null ? (
        <p>{error}</p>
      ) : (
        <p className="whitespace-pre-line text-start">
          <Translate
            translations={{ am: about.about_am, en: about.about_en, ru: about.about_ru }}
          />
        </p>
      )}
    </section>
  );
};
