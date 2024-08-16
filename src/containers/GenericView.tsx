import * as React from "react";

export interface IGenericViewProps {
  title: string;
  paragraph: string;
  children: React.ReactNode;
}

export function GenericView(props: IGenericViewProps) {
  const { title, paragraph, children } = props;
  return (
    <section className="p-[80px]">
      <section className="w-[1050px] mx-auto">
        <article className="w-[864px] mx-auto mb-[80px] ">
          <h2 className="font-martel font-bold leading-[50px] text-[40px] mx-auto w-fit">
            {title}
          </h2>
          <p className="w-[431px] h-[40px] font-open-sans font-medium text-second-color-text text-sm text-center mx-auto">
            {paragraph}
          </p>
        </article>
        <article className="flex gap-[30px]">{children}</article>
      </section>
    </section>
  );
}
