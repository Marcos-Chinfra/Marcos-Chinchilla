import React from "react";

export interface IInputProps {
  id: string;
  type: string;
  placeholder: string;
  width: string;
  heigth: string;
  color?: string;
  name?: string;
  labelText?: string;
  require?: boolean;
  fontFamilyLabel?: string;
  fontFamilyInput?: string;
  labelSize?: string;
}

export function Input(props: IInputProps) {
  const {
    color,
    labelText,
    id,
    type,
    require,
    placeholder,
    width,
    heigth,
    fontFamilyLabel = "font-open-sans",
    fontFamilyInput = "font-open-sans",
    labelSize = "text-sm",
  } = props;
  return (
    <section className={`flex flex-col ${color} ${width}`}>
      <label
        htmlFor=""
        className={`${fontFamilyLabel} font-bold ${labelSize} rounded-md mb-[12px]`}>
        {labelText}
      </label>

      <input
        required={require}
        type={type}
        id={id}
        name="update"
        placeholder={placeholder}
        className={`border py-3 px-5 ${heigth} ${fontFamilyInput}`}
      />
    </section>
  );
}
