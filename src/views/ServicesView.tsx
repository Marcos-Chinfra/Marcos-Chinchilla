import React from "react";
import { GenericView } from "../containers/GenericView";
import { CardInfo } from "../components/CardsInfo";

export function ServicesView() {
  const itemsRender = [
    {
      url: "../public/icons/balance.svg",
      alt: "balanza",
      items: [
        {
          text: "The best products start with Figma",
        },
        {
          text: "Desing with real data",
        },
        {
          text: "Ligthning fast prototyping",
        },
        {
          text: "Fastest way to organize",
        },
        {
          text: "Work at the speed of thought",
        },
      ],
      title: "Frauds or Mislead",
    },
    {
      url: "../public/icons/mallet.svg",
      alt: "mazo",
      items: [
        {
          text: "The best products start with Figma",
        },
        {
          text: "Desing with real data",
        },
        {
          text: "Ligthning fast prototyping",
        },
        {
          text: "Fastest way to organize",
        },
        {
          text: "Work at the speed of thought",
        },
      ],
      title: "Bailes & Warrants",
    },
    {
      url: "../public/icons/file.svg",
      alt: "archivo",
      items: [
        {
          text: "The best products start with Figma",
        },
        {
          text: "Desing with real data",
        },
        {
          text: "Ligthning fast prototyping",
        },
        {
          text: "Fastest way to organize",
        },
        {
          text: "Work at the speed of thought",
        },
      ],
      title: "Federal Drug Crimes",
    },
  ];
  return (
    <div>
      <GenericView
        title={"Practice Advice"}
        paragraph={
          "Problems trying to resolve the conflict between  the tow major realms of Classical physics: Newtonian mechanics"
        }>
        {itemsRender.map((item, index) => {
          return (
            <CardInfo
              key={index}
              url={item.url}
              alt={item.alt}
              items={item.items}
              title={item.title}
            />
          );
        })}
      </GenericView>
    </div>
  );
}
