import React from "react";

export interface IVideoContainerProps {
  title: string;
  paragraph: string;
}

export function VideoContainer(props: IVideoContainerProps) {
  const { title, paragraph } = props;
  return (
    <section className="w-[1050px] h-full mx-auto z-10 relative py-[80px] px-[86.5px] ">
      <section className="mx-auto flex justify-between flex-col h-full">
        <article className="w-[864px] mx-auto h-[100px]">
          <h2 className="w-[312px] font-martel font-bold leading-[50px] text-[40px] mx-auto mb-2.5 text-second-color-text">
            {title}
          </h2>
          <p className="w-[431px] h-[40px] font-open-sans font-medium text-second-color-text text-sm text-center mx-auto">
            {paragraph}
          </p>
        </article>
        <section className="w-[877px] h-[442px] bg-video-image bg-cover bg-center flex justify-center items-center">
          <div className="w-[98px] h-[98px] flex items-center justify-center bg-main_button_color rounded-full">
            <div className="w-0 h-0 border-t-[15px] border-b-[15px] border-l-[25px] border-t-transparent border-b-transparent border-l-white ml-1"></div>
          </div>
        </section>
      </section>
    </section>
  );
}
