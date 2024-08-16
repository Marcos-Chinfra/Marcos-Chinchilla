import React, { useState } from "react";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Button } from "../components/Button";

export interface IFormMakeAppoinmentProps {
  title: string;
  spanText: string;
}

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const options2 = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export function FormMakeAppoinment(props: IFormMakeAppoinmentProps) {
  const { title, spanText } = props;

  const [selectedValue, setSelectecValue] = useState("option1");
  const [selectedValue2, setSelectecValue2] = useState("option1");
  return (
    <div className="w-[602px]">
      <span className="text-base font-martel font-bold leading-6">{spanText}</span>
      <h2 className="font-martel text-[40px] leading-10">{title}</h2>
      <form action="" className="mt-[40px] flex flex-col gap-5">
        <div className="flex justify-between">
          <Input
            id={"fullname"}
            type={"text"}
            width={"w-[285px]"}
            heigth={"h-[50px]"}
            placeholder={"Full name"}
          />
          <Input
            id={"emil"}
            type={"email"}
            width={"w-[285px]"}
            heigth={"h-[50px]"}
            placeholder={"example@gmail.com"}
          />
        </div>
        <div className="flex justify-between">
          <Select
            options={options}
            value={selectedValue}
            onChange={setSelectecValue}
            width={"w-MakeAppointW"}
            heigth={"h-MakeAppointH"}
          />
          <Select
            options={options2}
            value={selectedValue2}
            onChange={setSelectecValue2}
            width={"w-MakeAppointW"}
            heigth={"h-MakeAppointH"}
          />
        </div>
        <textarea name="" id="" className="h-[140px] border"></textarea>
        <Button
          borderRadius={"rounded-md"}
          bgColor={"bg-second-color"}
          text={"Book Appoinment"}
          width={"w-[215px]"}
          heigth={"h-[58px]"}
          colorText={"text-white"}
        />
      </form>
    </div>
  );
}
