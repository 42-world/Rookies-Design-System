import { css } from '@emotion/css';
import * as React from 'react';
import { useState } from 'react';

type ListProps = {
  text: string;
  link: string;
};

type Props = {
  theme: '🌕' | '🌑';
  list: ListProps[];
};

const SortSelector = ({ list, theme }: Props) => {
  const [onFocus, setOnFocus] = useState(0);

  return (
    <div className={containerStyle}>
      {list.map((item, index) => {
        return (
          <div
            className={onFocus === index ? `selected_${theme}` : `unSelected_${theme}`}
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
flexDirection: "row",
justifyContent: "start",
gap: "20px",
// paddingLeft: "20px",
alignItems: "start",
overflow: "hidden",
`;
