import clsx from "clsx";
import { Dispatch, SetStateAction, TextareaHTMLAttributes } from "react";
import Zoom from "react-reveal/Zoom";
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const TextArea = ({
  label,
  className,
  value,
  setValue,
  ...props
}: TextAreaProps) => {
  return (
    <>
      <Zoom>
        <label className="text-sm flex flex-col gap-3">
          {label || ""}

          <textarea
            className={clsx("bg-[#F1F1F1] w-full rounded px-4 py-2", className)}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            {...props}
          />
        </label>
      </Zoom>
    </>
  );
};
