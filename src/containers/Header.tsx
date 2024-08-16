import React from "react";
import { ILinkProps, Link } from "../components/Link";

export interface IHeaderProps {
  logo: string;
  links: ILinkProps[];
}

export function Header(props: IHeaderProps) {
  const { logo, links } = props;
  return (
    <header className="w-[1322px] flex flex-row h-[104px] mx-auto justify-between items-center">
      <section>
        <h2 className="font-martel text-2xl font-bold">{logo}</h2>
      </section>
      <section className="w-headerWidth flex flex-row ">
        <article className="mr-[42px]">
          <ul className="flex flex-row gap-[23px]">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    href={link.href}
                    text={link.text}
                    target={link.target}
                    color={"text-second-color-text"}
                  />
                </li>
              );
            })}
          </ul>
        </article>
        <article className="flex flex-row w-[179px] justify-between">
          <div className="w-[46px] flex justify-between">
            <i className="fa-solid fa-magnifying-glass w-[16px]"></i>
            <i className="fa-solid fa-cart-shopping w-[16px]"></i>
          </div>
          <div>
            <i className="fa-solid fa-bars-staggered"></i>
          </div>
        </article>
      </section>
    </header>
  );
}
