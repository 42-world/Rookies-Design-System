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
          <div
            className={css`
              color: ${onFocus === index ? tokens.color.main_green_10 : tokens.color.grey_40_light};
              font-size: 100px;
            `}
            onClick={() => setOnFocus(index)}
          >
            {item.text}
          </div>
        );
      })}
    </div>
  );
};

const containerStyle = css`
height: "100%",
display: "flex",
flexDirection: "column",
justifyContent: "start",
gap: "20px",
alignItems: "start",
overflow: "hidden",
color: "red",
cursor: "pointer",
`;
