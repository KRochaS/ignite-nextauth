import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  heightValue: number;
};

export function Button({ heightValue, ...props }: ButtonProps) {
  return (
    <button
      className={`w-${heightValue} mt-2 h-12 rounded
            bg-gradient-to-r from-orange-100
            to-purple-300 p-1
            text-base font-semibold`}
      {...props}
    />
  );
}
