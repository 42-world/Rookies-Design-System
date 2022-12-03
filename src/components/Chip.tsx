import { css } from '@emotion/css';
import * as React from 'react';
import { useState } from 'react';
import { token } from '../common/token';

type Props = {
  text: string;
};

export function Chip({ text }: Props) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className={isSelected ? selectedStyle : unSelectedStyle} onClick={handleClick}>
      <p className={isSelected ? selectedTextStyle : unSelectedTextStyle}>{text}</p>
    </div>
  );
}

const unSelectedStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 18px 6px 18px;
  align-content: center;
  border-radius: 8px;
  border: 1px solid ${token.color.grey_20_dark};
  background-color: #fff;
`;

const unSelectedTextStyle = css`
  font-size: 16px;
  margin: 0;
`;

const selectedTextStyle = css`
  color: var(--grey_5_light, #fefefe);
  font-size: 16px;
  margin: 0;
`;

const selectedStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 18px 6px 18px;
  background-color: var(--main_green_10, #41c464);
  overflow: hidden;
  align-content: center;
  gap: 10;
  border-radius: 8px;
`;
