import { useEffect, useState } from "react";

export const useMousePosition = () => {
  const [position, setPosition] = useState<{
    x: number | undefined;
    y: number | undefined;
  }>({ x: undefined, y: undefined });

  useEffect(() => {
    const getPosition = (e: MouseEvent) => {
      const x = Math.floor(e.clientX);
      const y = Math.floor(e.clientY);
      setPosition({ x, y });
    };

    window.addEventListener("pointermove", getPosition);

    return () => {
      window.removeEventListener("pointermove", getPosition);
    };
  }, []);

  return { ...position };
};