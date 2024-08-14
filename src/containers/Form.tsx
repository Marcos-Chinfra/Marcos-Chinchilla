import React, { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Select } from "../components/Select";

export interface IFormProps {
  title: string;
}
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export function Form(props: IFormProps) {
  const [selectedValue, setSelectecValue] = useState("option1");

  const { title } = props;
  return (
    <form className="flex flex-col gap-5">
      <h2>{title}</h2>
      <Input
        labelText={"Name*"}
        id={"name"}
        type={"text"}
        placeholder={"Full name"}
        require={true}
        borderRadius={"rounded-md"}
        width="w-AppoinmentBookw"
        heigth="h-AppoinmentBookh"
      />
      <Input
        labelText={"Email*"}
        id={"email"}
        type={"email"}
        placeholder={"example@gmail.com"}
        require={true}
        borderRadius={"rounded-md"}
        width="w-AppoinmentBookw"
        heigth="h-AppoinmentBookh"
      />
      <Select
        options={options}
        value={selectedValue}
        onChange={setSelectecValue}
        width={"w-AppoinmentBookw"}
        heigth={"h-AppoinmentBookh"}
      />
      <Button
        borderRadius={"rounded-md"}
        text={"Book Appointment"}
        bgColor={"bg-main_button_color"}
        colorText={"text-white"}
        width={"w-AppoinmentBookw"}
        heigth={"h-AppoinmentBookh"}
      />
    </form>
  );
}
