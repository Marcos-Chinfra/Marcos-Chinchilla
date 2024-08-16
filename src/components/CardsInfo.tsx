import React from "react";

type item = {
  text: string;
};
export interface ICardInfoProps {
  url: string;
  alt: string;
  items: item[];
  title: string;
}

export function CardInfo(props: ICardInfoProps) {
  const { url, alt, items, title } = props;
  return (
    <section className="h-[385px] w-[328px] border rounded-xl bg-card-info-color">
      <div className="h-[132px]  rounded-t-xl flex items-center justify-center gap-[15px]">
        <figure className="h-[72px] w-[72px] bg-white rounded-full flex justify-center items-center">
          <img src={url} alt={alt} />
        </figure>
        <span className="text-base font-martel font-bold">{title}</span>
      </div>
      <div className="h-[253px] rounded-xl border border-color-card-border bg-white">
        <ul className="py-[30px] px-[50px]">
          {items.map((txt, index) => {
            return (
              <li
                key={index}
                className="font-open-sans text-second-color-text font-bold text-sm leading-6">
                <h6>- {txt.text}</h6>
              </li>
            );
          })}
          <a href="" className="text-borwn-yellow text-sm font-medium font-open-sans leading-6">
            Learn More
          </a>
        </ul>
      </div>
    </section>
  );
}
