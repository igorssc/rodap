import clsx from "clsx";
import { HTMLAttributes } from "react";

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  scheme?: "primary" | "secondary";
  type?: "dashed" | "dotted" | "double" | "solid" | "rounded";
}

export const Divider = ({
  scheme = "primary",
  type = "solid",
  className,
  ...props
}: DividerProps) => {
  return (
    <>
      <hr
        className={clsx(
          scheme === "primary" ? "border-primary" : "border-white",
          type === "dashed" && "border-dashed",
          type === "dotted" && "border-dotted",
          type === "double" && "border-double",
          type === "solid" && "border-solid",
          type === "rounded" && "rounded-md",
          "border-2",
          className
        )}
        {...props}
      />
    </>
  );
};
