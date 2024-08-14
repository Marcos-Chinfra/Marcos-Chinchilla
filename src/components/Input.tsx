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
}

export function Input(props: IInputProps) {
  const { borderRadius, color, labelText, id, type, require, placeholder } = props;
  return (
    <section className={`rounded${borderRadius} bg-${color}`}>
      <label htmlFor="" className="text-xs text-gray-600">
        {labelText}
      </label>

      <input
        required={require}
        type={type}
        id={id}
        name="update"
        placeholder={placeholder}
        className="bg-light-blue w-full py-1 px-3 mt-1 outline-none"
      />
    </section>
  );
}
