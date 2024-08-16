import React from "react";

interface Option {
  value: string;
  label: string;
}

interface ISelectProps {
  options: Option[];
  value: string;
  width: string;
  heigth: string;
  fontFamilyLabel?: string;
  fontFamilyInput?: string;
  labelText?: string;
  labelSize?: string;
  onChange: (value: string) => void;
}

export function Select(props: ISelectProps) {
  const {
    options,
    value,
    onChange,
    heigth,
    width,
    fontFamilyLabel = "font-open-sans",
    fontFamilyInput = "font-monserrat",
    labelText,
    labelSize = "text-sm",
  } = props;
  return (
    <div>
      <label htmlFor="" className={`${fontFamilyLabel} ${labelSize} font-bold`}>
        {labelText}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`border p-2 rounded ${heigth} ${width} ${fontFamilyInput} mt-[12px]`}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
