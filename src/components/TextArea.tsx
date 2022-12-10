import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const TextArea = ({ label, className, ...props }: TextAreaProps) => {
  return (
    <>
      <label className="text-sm flex flex-col gap-3">
        {label || ""}

        <textarea
          className={clsx("bg-[#F1F1F1] w-full rounded px-4", className)}
          {...props}
        />
      </label>
    </>
  );
};
