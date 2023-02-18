import { css } from '@emotion/css';
import React, { MouseEventHandler, useState } from 'react';
import { token } from '../../common/token';
import { Theme } from '../../common/type/theme';
React;

type ListProps = {
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
   * 선택된 인덱스
   */
  selectedIndex: number;

  /**
   * 리스트
   */
  list: ListProps[];

  /**
   * selector 클릭 이벤트
   */
  onClick: MouseEventHandler<SVGTextElement>;
};

/**
 * 정렬 선택 컴포넌트
 *
 *  @author sham
 */
export function SortSelector({ list, theme, selectedIndex }: Props) {
  const [onFocus, setOnFocus] = useState(selectedIndex);
  const handleSelect = (index: number) => {
    setOnFocus(index);
  };

  return (
    <div className={containerStyle}>
      {list.map((item, index) => {
        return (
          <div key={index} onClick={() => handleSelect(index)}>
            <div className="item" key={index}>
              <text className={beforeItem(onFocus === index)}>•</text>
              <text className={itemText(onFocus === index)}>{item.text}</text>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const containerStyle = css`
  display: flex;
  flex-direction: row;
  padding: 8px;

  font-weight: 500;
  font-size: 16px;

  .item {
    cursor: pointer;
    margin-left: 8px;
  }
`;

const beforeItem = (isFocus: boolean) => css`
  color: ${isFocus ? token.color.main_green_10 : token.color.grey_40_light};
  margin: 8px;
  transition: color 0.3s ease-in-out;
`;

const itemText = (isFocus: boolean) => css`
  color: ${isFocus ? token.color.grey_40_light : token.color.grey_40_dark};
  transition: color 0.3s ease-in-out;
`;
