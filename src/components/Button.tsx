import React from "react";

export interface IButtonProps {
  borderRadius: string;
  text: string;
  width: string;
  heigth: string;
  colorText: string;
  bgColor?: string;
  borderColor?: string;
  fontFamily?: string;
  fontWeight?: string;
}

export function Button(props: IButtonProps) {
  const {
    text,
    bgColor,
    borderRadius,
    width,
    heigth,
    colorText,
    borderColor,
    fontFamily = "font-open-sans",
    fontWeight = "font-bold",
  } = props;
  return (
    <button
      type="submit"
      className={`${borderRadius} ${bgColor} border ${heigth} ${width} ${colorText} ${borderColor} ${fontFamily} ${fontWeight}`}>
      {text}
    </button>
  );
}
