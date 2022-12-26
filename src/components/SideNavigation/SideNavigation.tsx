import { css } from '@emotion/css';
import React, { useState } from 'react';
import { token } from '../../common/token';
import { Theme } from '../../common/type';
React;

type ListProps = {
  /**
   * 아이콘
   */
  icon: string;

  /**
   * 텍스트
   */
  text: string;

  /**
   * 링크
   */
  link: string;
};

type Props = {
  /**
   * 테마
   */
  theme: Theme;

  /**
   * 포커스
   */
  focus: number;

  /**
   * 아이콘 여부
   */
  hasIcon: boolean;

  /**
   * 리스트
   */
  list: ListProps[];
};

/**
 * 사이드 네비게이션
 *
 * @author beason
 */
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
                margin: 0;
                line-height: 1.25;
                text-decoration: none;
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
