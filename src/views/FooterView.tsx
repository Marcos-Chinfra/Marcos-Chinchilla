import React from "react";
import { List, ListLink } from "../components/ListLinks";

export function FooterView() {
  const listForSend: List[] = [
    {
      value: "About Us",
      href: "#",
    },
    {
      value: "Carrier",
      href: "#",
    },
    {
      value: "We are hiring",
      href: "#",
    },
    {
      value: "Blog",
      href: "#",
    },
  ];
  const listFeatures: List[] = [
    {
      value: "Business Marketing",
      href: "#",
    },
    {
      value: "User Analyc",
      href: "#",
    },
    {
      value: "Live Chat",
      href: "#",
    },
    {
      value: "Inlimited Support",
      href: "#",
    },
  ];
  const listResources: List[] = [
    {
      value: "IOS & Android",
      href: "#",
    },
    {
      value: "Watch a Demo",
      href: "#",
    },
    {
      value: "Customers",
      href: "#",
    },
    {
      value: "API",
      href: "#",
    },
  ];
  return (
    <section>
      <section className="bg-footer-backforund text-white px-[195px]">
        <article>
          <div className="py-[50px] flex flex-row justify-between border-b">
            <h3 className="font-martel font-bold text-2xl leading-8">Litigade</h3>
            <div></div>
          </div>
          <div className="flex flex-row py-[70px] gap-[30px]">
            <ListLink title={"Company Info"} listRender={listForSend} />
            <ListLink title={"Legal"} listRender={listForSend} />
            <ListLink title={"Features"} listRender={listFeatures} />
            <ListLink title={"Resources"} listRender={listResources} />
            <div className="flex flex-col w-[321px]">
              <h5 className="mb-[20px] font-martel font-bold text-base leading-6">Get In Touch</h5>
              <div className="rounded flex items-center justify-center">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="px-[20px] py-[15px] w-[204px]"
                />
                <button className="border border-white rounded-r-[5px] w-[116px] h-[54px] bg-borwn-yellow">
                  Suscribe
                </button>
              </div>
              <span className="font-montserrat font-xs leading-7 text-footer-color text-xs">
                Lorem Umpsum dolor amil
              </span>
            </div>
          </div>
        </article>
      </section>
      <section className=" flex bg-gradient-to-r from-main_button_color to-footer-gradiant h-[74px] px-[195px]  items-center">
        <p className="text-white font-bold font-open-sans text-sm leading-6">
          Make With Love y Figmaland All Rigth Reserved
        </p>
      </section>
    </section>
  );
}
