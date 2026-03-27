import React from "react";
import { cn } from "@/lib/utils";

interface FlippingCardProps {
  className?: string;
  height?: number;
  width?: number;
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
  bgColor?: string;
}

export function FlippingCard({
  className,
  frontContent,
  backContent,
  height = 300,
  width = 350,
  bgColor,
}: FlippingCardProps) {
  const cardStyle = bgColor ? { backgroundColor: bgColor } : {};

  return (
    <div
      className="group/flipping-card [perspective:1000px]"
      style={
        {
          "--height": `${height}px`,
          "--width": `${width}px`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "relative rounded-xl border border-neutral-200 transition-all duration-700 [transform-style:preserve-3d] group-hover/flipping-card:[transform:rotateY(180deg)] shadow-lg",
          !bgColor && "bg-white dark:bg-neutral-950 dark:border-neutral-800",
          "h-[var(--height)] w-[var(--width)]",
          className
        )}
        style={cardStyle}
      >
        {/* Front Face */}
        <div 
          className={cn(
            "absolute inset-0 h-full w-full rounded-[inherit] [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(0deg)]",
            !bgColor && "bg-white text-neutral-950 dark:bg-zinc-950 dark:text-neutral-50"
          )}
          style={cardStyle}
        >
          <div className="[transform:translateZ(70px)_scale(.93)] h-full w-full">
            {frontContent}
          </div>
        </div>
        {/* Back Face */}
        <div 
          className={cn(
            "absolute inset-0 h-full w-full rounded-[inherit] [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(180deg)]",
            !bgColor && "bg-white text-neutral-950 dark:bg-zinc-950 dark:text-neutral-50"
          )}
          style={cardStyle}
        >
          <div className="[transform:translateZ(70px)_scale(.93)] h-full w-full">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
}
