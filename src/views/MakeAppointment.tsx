import React from "react";
import { FormMakeAppoinment } from "../containers/FormMakeAppoinment";
import { Button } from "../components/Button";

export function MakeAppoinment() {
  return (
    <div>
      <div className="bg-image-make bg-cover bg-center h-[679px] px-[195px] pt-[90px]">
        <FormMakeAppoinment title={"Make an Appoinment"} spanText={"Contact Us"} />
      </div>
      <div className="h-[142px] flex px-[195px] justify-between py-[40px]">
        <div>
          <div>
            <h3 className="font-martel font-bold text-2xl">Request A Free Consultation</h3>
            <span className="font-medium text-second-color-text text-sm font-open-sans">
              the quick fox jumps over the alzy dog
            </span>
          </div>
        </div>
        <div>
          <Button
            borderRadius={"rounded-md"}
            bgColor={"bg-second-color"}
            text={"Contact Us"}
            width={"w-[158px]"}
            heigth={"h-[58px]"}
            colorText={"text-white"}
          />
        </div>
      </div>
    </div>
  );
}
