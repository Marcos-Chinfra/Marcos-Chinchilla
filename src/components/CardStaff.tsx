import React from "react";

export type Networks = {
  facebook: string;
  instagram: string;
  twitter: string;
};

export interface ICardStaffProps {
  image: string;
  position: string;
  name: string;
  networksContant: Networks;
}

export function CardStaff(props: ICardStaffProps) {
  const { image, position, name, networksContant } = props;
  return (
    <section className="w-[328px] h-[373px] border">
      <figure>
        <img src={image} alt="" />
      </figure>
      <article className="w-full h-[142px] flex justify-center items-center flex-col gap-[5px]">
        <h5 className="font-martel font-bold text-base ">{name}</h5>
        <h6 className="font-open-sans font-bold text-sm text-second-color-text">
          {position.toUpperCase()}
        </h6>
        <div className="flex flex-row gap-[14px]">
          <a href="#">
            <img src={networksContant.facebook} alt="" />
          </a>
          <a href="#">
            <img src={networksContant.instagram} alt="" />
          </a>
          <a href="#">
            <img src={networksContant.twitter} alt="" />
          </a>
        </div>
      </article>
    </section>
  );
}
