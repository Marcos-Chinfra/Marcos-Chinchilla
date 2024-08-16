import React from "react";
import { Form } from "../containers/Form";
import { Header } from "../containers/Header";
import { Button } from "../components/Button";

const navLinks = [
  {
    href: "Home",
    text: "Home",
  },
  {
    href: "Product",
    text: "Product",
  },
  {
    href: "Pricing",
    text: "Pricing",
  },
  {
    href: "Contact",
    text: "Contact",
  },
];
export function MainView() {
  return (
    <div className="bg-main-image bg-cover bg-center min-w-mobileView h-mainImageH sm414:w-[414px] ">
      <div>
        <Header links={navLinks} logo={"Litigate"} />
      </div>
      <div className="h-AppoinmentBoowFormH px-[195px] flex flex-row justify-between sm414:flex-col sm414:px-[45px]">
        <section className="h-full flex items-start flex-col justify-center w-[600px] ">
          <p className="text-[58px] font-martel leading-[65px] font-black mb-[35px] sm414:w-[323px]">
            Help to reclaim your life and feedom
          </p>
          <span className="font-montserrat text-second-color-text mb-[35px] text-[20px] leading-[30px] w-[539px] h-[60px] font-medium">
            We know how large objects will act, but things on a small scale.
          </span>
          <div className="w-[347px] flex justify-between">
            <Button
              text={"Get Quote Now"}
              bgColor={"bg-second-color"}
              borderRadius={"rounded-buttonRadiues"}
              width={"w-[182px]"}
              heigth={"h-buttonMainH"}
              colorText={"text-white"}
            />
            <Button
              text={"Lear More"}
              borderRadius={"rounded-buttonRadiues"}
              width={"w-[155px]"}
              heigth={"h-buttonMainH"}
              colorText={"text-second-color-text"}
              borderColor={"border-second-color"}
            />
          </div>
        </section>
        <Form title="Book Appointment" backgorundColor={"bg-white"} />
      </div>
    </div>
  );
}
