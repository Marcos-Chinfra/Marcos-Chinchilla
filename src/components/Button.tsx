import React from "react";

export interface IButtonProps {
  bgColor: string;
  borderRadius: string;
  text: string;
  width: string;
  heigth: string;
  colorText: string;
}

export function Button(props: IButtonProps) {
  const { text, bgColor, borderRadius, width, heigth, colorText } = props;
  return (
    <button
      type="submit"
      className={`${borderRadius} ${bgColor} border ${heigth} ${width} ${colorText}`}>
      {text}
    </button>
  );
}
