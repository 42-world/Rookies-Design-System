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
  };

  return (
    <div
      className={isSelected ? selectedStyle : unSelectedStyle}
      onClick={handleClick}
    >
      <p className={isSelected ? selectedTextStyle : unSelectedTextStyle}>
        {text}
      </p>
    </div>
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
  font-size: 16px;
`;

const unSelectedTextStyle = css`
  flex-shrink: 0;
  width: auto; /* 28px */
  height: auto; /* 23px */
  white-space: pre;
  position: relative;
  line-height: 1.2;
`;

const selectedTextStyle = css`
  flex-shrink: 0;
  width: auto; /* 28px */
  height: auto; /* 23px */
  white-space: pre;
  position: relative;
  color: var(--grey_5_light, #fefefe);
  line-height: 1.2;
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
