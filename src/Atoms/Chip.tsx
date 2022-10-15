import { css } from "@emotion/css";
import * as React from "react";
import { useState } from "react";

type Props = {
  text: string;
};

export function Chip({ text }: Props) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    console;
  };

  return (
    <button
      className={isSelected ? selectedStyle : unSelectedStyle}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

const unSelectedStyle = css`
  box-sizing: border-box;
  width: min-content; /* 64px */
  height: min-content; /* 35px */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 18px 6px 18px;
  overflow: hidden;
  align-content: center;
  flex-wrap: nowrap;
  gap: 10;
  border-radius: 8px;
  border: 1px solid var(--grey_30_light, #e9ebee);
`;

const selectedStyle = css`
  box-sizing: border-box;
  width: min-content; /* 64px */
  height: min-content; /* 35px */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 18px 6px 18px;
  background-color: var(--main_green_10, #41c464);
  overflow: hidden;
  align-content: center;
  flex-wrap: nowrap;
  gap: 10;
  border-radius: 8px;
`;
