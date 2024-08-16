import React from "react";

export type User = {
  img: string;
  username: string;
  position: string;
};

export interface ICardsReviewProps {
  score: number;
  userInfo: User;
  paragraph: string;
}

export function CardsReview(props: ICardsReviewProps) {
  const { score, userInfo, paragraph } = props;
  const totalStars = 5;
  return (
    <section className="h-[244px] w-[327px] border rounded-[5px] bg-white px-[35px] py-[30px] flex flex-col gap-[20px]">
      <div className="flex">
        {Array.from({ length: totalStars }, (_, index) => {
          return (
            <div key={index}>
              {index < score ? (
                <i className="fa-solid fa-star text-yellow-start"></i>
              ) : (
                <i className="fa-regular fa-star text-yellow-start"></i>
              )}
            </div>
          );
        })}
      </div>
      <p className="font-open-sans font-bold text-second-color-text">{paragraph}</p>
      <section className="flex gap-[15px]">
        <figure className={"w-[50px] h-[50px]"}>
          <img src={userInfo.img} alt="user" />
        </figure>
        <article className="flex flex-col font-open-sans">
          <span className="text-borwn-yellow">{userInfo.username}</span>
          <span className="font-bold">{userInfo.position}</span>
        </article>
      </section>
    </section>
  );
}
