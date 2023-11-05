import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export function Button(props: ButtonProps) {
  return (
    <button
      className="mt-2 h-12 w-72 rounded 
                    bg-gradient-to-r from-orange-100
                    to-purple-300 text-base
                    font-semibold text-white"
      {...props}
    />
  );
}
