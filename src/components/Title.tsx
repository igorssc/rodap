import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
  scheme?: "primary" | "secondary" | "tertiary";
}

export const Title = ({
  asChild,
  className,
  scheme = "primary",
  ...props
}: TitleProps) => {
  const Component = asChild ? Slot : "h1";

  return (
    <>
      <Component
        className={clsx(
          "uppercase font-black text-6xl",
          scheme === "primary" && "text-white",
          scheme === "secondary" && "text-primary",
          scheme === "tertiary" && "text-black",
          className
        )}
        {...props}
      />
    </>
  );
};
