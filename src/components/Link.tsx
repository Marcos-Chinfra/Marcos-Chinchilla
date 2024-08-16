import React from "react";

export interface ILinkProps {
  href: string;
  text: string;
  target?: string;
  fontFamily?: string;
  color?: string;
}

export function Link(props: ILinkProps) {
  const { href, text, target = "_self", fontFamily = "font-open-sans", color } = props;
  return (
    <a href={href} target={target} className={`${fontFamily} font-medium ${color}`}>
      {text}
    </a>
  );
}
