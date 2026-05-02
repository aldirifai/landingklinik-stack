import * as React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
};

export function Container({
  size = "lg",
  className,
  ...props
}: ContainerProps) {
  const sizeClass = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
  }[size];

  return (
    <div
      className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizeClass, className)}
      {...props}
    />
  );
}
