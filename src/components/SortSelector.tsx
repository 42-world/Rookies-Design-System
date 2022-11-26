import { css } from '@emotion/css';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { tokens } from '../tokens';

type ListProps = {
  text: string;
  link: string;
};

type Props = {
  theme: 'light' | 'dark';
  focus: number;
  list: ListProps[];
};

export const SortSelector = ({ list, theme, focus }: Props) => {
  const [onFocus, setOnFocus] = useState(0);

  useEffect(() => {
    setOnFocus(focus);
  }, []);

  return (
    <div className={containerStyle}>
      {list.map((item, index) => {
        return (
          <div className="item">
            <text className={beforeItem(onFocus === index)}>•</text>
            <text className={itemText(onFocus === index)} onClick={() => setOnFocus(index)}>
              {item.text}
            </text>
          </div>
        );
      })}
    </div>
  );
};

const containerStyle = css`
  display: flex;
  flex-direction: row;
`;

const beforeItem = (isFocus: boolean) => css`
  color: ${isFocus ? tokens.color.main_green_10 : tokens.color.grey_40_light};
  margin: 4px;
`;

const itemText = (isFocus: boolean) => css`
  color: ${isFocus ? tokens.color.grey_40_light : tokens.color.grey_40_dark};
`;
