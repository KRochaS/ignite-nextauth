import { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  label: string;
};

export function Input({ label, ...props }: InputProps) {
  return (
    <>
      <label className="mb-2 text-base font-semibold text-white">{label}</label>
      <input
        className="mb-4 h-12 w-72 rounded  bg-gray-960 pl-2 text-white"
        {...props}
      />
    </>
  );
}
