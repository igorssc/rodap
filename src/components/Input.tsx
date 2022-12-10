import clsx from "clsx";
import { UploadSimple } from "phosphor-react";
import { ChangeEvent, InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  legend?: string;
}

export const Input = ({ className, label, legend, ...props }: InputProps) => {
  const [file, setFile] = useState<File>();

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    setFile(e.target.files?.[0]);
  };

  return (
    <>
      <label className="text-sm flex flex-col gap-3">
        {label || ""}

        <input
          className={clsx(
            "bg-[#F1F1F1] w-full rounded h-9 px-4",
            props.type === "file" && "hidden",
            className
          )}
          onChange={handleFile}
          {...props}
        />

        {props.type === "file" && (
          <div className="bg-[#F1F1F1] text-[#858585] w-full rounded h-9 px-4 flex gap-3 items-center">
            <UploadSimple size={20} weight="bold" />
            {file ? file.name : "Enviar arquivo"}
          </div>
        )}

        {legend && <small className="italic">{legend}</small>}
      </label>
    </>
  );
};
