import { getCurrentYear } from "../utils/getCurrentYear";

export const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className=" w-full relative h-16 bg-background border-t flex items-center justify-center text-center z-30">
      <p className=" text-foreground/80 font-semibold">
        &copy; {currentYear} Digitalize. All rights reserved.
      </p>
    </footer>
  );
};
