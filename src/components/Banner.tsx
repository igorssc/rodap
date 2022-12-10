import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  scheme?: "primary" | "secondary";
  children: ReactNode;
}

export const Banner = ({
  children,
  scheme = "primary",
  className,
  ...props
}: BannerProps) => {
  return (
    <>
      <div
        className={clsx(
          "py-24 flex flex-col items-center justify-center",
          scheme === "primary"
            ? "bg-primary text-white"
            : "bg-white text-primary",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
};
