import { css } from '@emotion/css';
import * as React from 'react';
import { useState } from 'react';
import { tokens } from '../tokens';

type ListProps = {
  text: string;
  link: string;
};

type Props = {
  theme: 'light' | 'dark';
  selectIndex: number;
  list: ListProps[];
};

export const SortSelector = ({ list, theme, selectIndex }: Props) => {
  const [select, setSelect] = useState(selectIndex);

  return (
    <div className={containerStyle}>
      {list.map((item, index) => {
        return (
          <div className="item">
            <text className={beforeItem(select === index)}>•</text>
            <text className={itemText(select === index)} onClick={() => setSelect(index)}>
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
