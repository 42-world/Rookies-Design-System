import { css } from '@emotion/css';
import * as React from 'react';
import { useState } from 'react';
import { token } from '../common/token';

type ListProps = {
  icon: string;
  text: string;
  link: string;
};

type Props = {
  theme: 'light' | 'dark';
  focus: number;
  hasIcon: boolean;
  list: ListProps[];
};

export function SideNavigation({ theme, hasIcon, list, focus }: Props) {
  const [onFocus, setOnFocus] = useState(focus);
  const handleFocus = (index: number) => {
    setOnFocus(index);
  };
  return (
    <div className={contaier}>
      {list.map((list, index) => {
        return (
          <div className={itemContainer} onClick={() => handleFocus(index)}>
            {/* <div>{list.icon}</div> */}
            <a
              className={css`
                font-size: 16px;
                color: ${focus === index ? token.color.main_green_10 : token.color.grey_40_light};
                font-weight: ${focus === index ? 600 : 500};
                font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
                  'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
                  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
                margin: 0;
                line-height: 1.25;
                text-decoration: none;
                @font-face {
                  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
                    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
                    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
                  src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css');
                }
              `}
              href={list.link}
            >
              {list.text}
            </a>
            <div
              className={css`
                width: 3px;
                background-color: ${token.color.main_green_10};
                border-radius: 0px 2px 2px 0px;
                color: ${token.color.main_green_10};
                opacity: ${focus === index ? 1 : 0};
                transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
              `}
            >
              .
            </div>
          </div>
        );
      })}
    </div>
  );
}

const contaier = css`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
  align-items: start;
  overflow: hidden;
`;

const itemContainer = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
