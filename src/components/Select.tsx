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
  onChange: (value: string) => void;
}

export function Select(props: ISelectProps) {
  const { options, value, onChange, heigth, width } = props;
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`border p-2 rounded ${heigth} ${width}`}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
