import React, { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Select } from "../components/Select";

export interface IFormProps {
  title: string;
  backgorundColor: string | undefined;
  fontFamilyTitle?: string;
  fontFamilyLabel?: string;
  fontFamilyInput?: string;
}
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export function Form(props: IFormProps) {
  const [selectedValue, setSelectecValue] = useState("option1");

  const { title, backgorundColor, fontFamilyTitle = "font-open-sans" } = props;
  return (
    <form
      className={`flex flex-col gap-5 w-AppoinmentBoowFormW h-AppoinmentBoowFormH border ${backgorundColor} p-10 ${fontFamilyTitle}`}>
      <h3 className="font-bold text-2xl font-martel w-[234px] text-center">{title}</h3>
      <Input
        labelText={"Name*"}
        id={"name"}
        type={"text"}
        placeholder={"Full name"}
        require={true}
        width="w-AppoinmentBookw"
        heigth="h-AppoinmentBookh"
      />
      <Input
        labelText={"Email*"}
        id={"email"}
        type={"email"}
        placeholder={"example@gmail.com"}
        require={true}
        width="w-AppoinmentBookw"
        heigth="h-AppoinmentBookh"
      />
      <Select
        options={options}
        value={selectedValue}
        onChange={setSelectecValue}
        width={"w-AppoinmentBookw"}
        heigth={"h-AppoinmentBookh"}
        labelText={"Departament*"}
      />
      <Select
        options={options}
        value={selectedValue}
        onChange={setSelectecValue}
        width={"w-AppoinmentBookw"}
        heigth={"h-AppoinmentBookh"}
        labelText={"Time*"}
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
