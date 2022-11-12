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
  focus: number;
  list: ListProps[];
};

export const SortSelector = ({ list, theme, focus }: Props) => {
  const [onFocus, setOnFocus] = useState(0);

  return (
    <div className={containerStyle}>
      {list.map((item, index) => {
        return (
          <div className="item">
            <text
              className={css`
                color: ${onFocus === index ? tokens.color.main_green_10 : tokens.color.grey_40_light};
                font-size: 100px;
              `}
              onClick={() => setOnFocus(index)}
            >
              {item.text}
            </text>
          </div>
        );
      })}
    </div>
  );
};

const containerStyle = css`


height: "100%",
display: "flex",
flex-direction: column,
gap: "20px",
al: "start",
color: "red",
font-size: "24px",
cursor: "pointer",

.item::before {
  content: "•";
}
`;
