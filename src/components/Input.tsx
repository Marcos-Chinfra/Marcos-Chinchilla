import React from "react";

export interface IInputProps {
  labelText: string;
  borderRadius?: string;
  id: string;
  name?: string;
  type: string;
  require?: boolean;
  placeholder: string;
  color?: string;
  width: string;
  heigth: string;
}

export function Input(props: IInputProps) {
  const { borderRadius, color, labelText, id, type, require, placeholder, width, heigth } = props;
  return (
    <section className={`flex flex-col ${color} ${width}`}>
      <label htmlFor="" className="">
        {labelText}
      </label>

      <input
        required={require}
        type={type}
        id={id}
        name="update"
        placeholder={placeholder}
        className={`${borderRadius} border py-3 px-5 ${heigth}`}
      />
    </section>
  );
}
