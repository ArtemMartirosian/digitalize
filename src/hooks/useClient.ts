import { useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export const useClient = () => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useIsomorphicLayoutEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};
