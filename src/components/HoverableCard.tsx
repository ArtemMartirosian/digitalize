"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { cn } from "@/lib/utils";
import { CSSProperties, HTMLAttributes, ReactNode, useRef } from "react";

interface HoverableCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  cursorWidth?: number;
}

export const HoverableCard = ({
  children,
  className,
  cursorWidth = 256,
  ...props
}: HoverableCardProps) => {
  const card = useRef<HTMLDivElement | null>(null);
  const { x, y } = useMousePosition();

  // Map x position to hue value (0-360 degrees)
  const calculateHue = (x: number | undefined, y: number | undefined) => {
    if (!x || !y || !card.current) return 0;
    const rect = card.current.getBoundingClientRect();
    const relativeX = x - rect.left;
    const hue = Math.floor((relativeX / rect.width) * 360);
    return hue;
  };

  const hue = calculateHue(x, y);

  return (
    <div
      ref={card}
      style={
        card.current && x && y
          ? (() => {
              const rect = card.current.getBoundingClientRect();
              return {
                "--x": `${x - rect.left}px`,
                "--y": `${y - rect.top}px`,
                "--w": `${cursorWidth}px`,
                "--hue": `${hue}`,
              } as CSSProperties;
            })()
          : {}
      }
      className="p-px bg-muted relative card rounded-sm overflow-hidden"
      {...props}
    >
      <div
        className={cn(
          "overflow-hidden w-full h-full align-bottom max-w-full max-h-full justify-between backdrop-blur-md flex flex-col gap-4 relative p-[2px] group",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};