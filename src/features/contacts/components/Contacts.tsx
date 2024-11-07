import { SubTitle } from "@/components/SubTitle";
import { ContactForm } from "./ContactForm";

export const Contacts = () => {
  return (
    <section className="flex w-full flex-col items-center gap-4">
      <SubTitle>Contact us</SubTitle>
      <ContactForm />
    </section>
  );
};
