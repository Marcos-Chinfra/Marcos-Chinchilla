import React from "react";

export type List = {
  href: string;
  value: string;
};
export interface IListLinkProps {
  title: string;
  listRender: List[];
}

export function ListLink(props: IListLinkProps) {
  const { listRender, title } = props;
  return (
    <div className="w-[148px] h-[170px]">
      <h5 className="font-bold font-martel text-base mb-[20px]">{title}</h5>
      <ul>
        {listRender.map((item, index) => {
          return (
            <li key={index} className="mb-[10px]">
              <a href={item.href}>{item.value}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
