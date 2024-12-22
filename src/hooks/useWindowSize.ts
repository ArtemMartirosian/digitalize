import { useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export const useWindowSize = () => {
  const [clientWindow, setClientWindow] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useIsomorphicLayoutEffect(() => {
    setIsInitialized(true);

    const handleResize = () => {
      setClientWindow({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Initialize window size on mount
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { ...clientWindow, isInitialized };
};
