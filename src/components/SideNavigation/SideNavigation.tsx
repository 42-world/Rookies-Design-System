import { css } from '@emotion/css';
import { motion } from 'framer-motion';
import React from 'react';
import { token } from '../../common/token';
import { Theme } from '../../common/type';
import { Text } from '../../typography';
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
   * 페이지 타입
   */
  pageType: 'One Page' | 'Multi Page';

  /**
   * 현재 링크(focused)
   */
  currentLink: string;

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
 * @author beson
 */

export function SideNavigation({ theme, hasIcon, currentLink, list }: Props) {
  console.log(list);
  return (
    <div className={contaier}>
      {list.map((list) => {
        return (
          <a className={itemContainer} href={list.link}>
            {hasIcon && <div>{list.icon}</div>}
            <Text
              text={list.text}
              align="left"
              color={currentLink === list.link ? 'main_green_10' : 'grey_40'}
              size="body2"
              theme={theme}
            />
            {currentLink === list.link ? (
              <motion.div
                className={css`
                  width: 3px;
                  height: 20px;
                  background-color: ${token.color.main_green_10};
                  border-radius: 0px 2px 2px 0px;
                `}
                layoutId="underline"
              />
            ) : null}
          </a>
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
  text-decoration: none;

  & p {
    margin: 0;
  }
`;
