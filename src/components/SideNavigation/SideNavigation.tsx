import { css } from '@emotion/css';
import { motion } from 'framer-motion';
import React from 'react';
import * as IconComponents from '../../assets/icons';
import { token } from '../../common/token';
import { Theme } from '../../common/type';
import { Icons } from '../../common/type/icons';
import { Text } from '../../typography';
React;

type ListProps = {
  /**
   * 아이콘
   */
  icon: Icons;

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
  const activeColor = 'main_green_10';
  const unActiveColor = theme === 'light' ? 'grey_40_light' : 'grey_40_dark';

  return (
    <div className={contaier}>
      {list.map((list) => {
        return (
          <a className={itemContainer} href={list.link}>
            <div>
              {hasIcon &&
                React.createElement(IconComponents[list.icon], {
                  color: currentLink === list.link ? activeColor : unActiveColor,
                })}
              <Text
                text={list.text}
                align="left"
                color={currentLink === list.link ? 'main_green_10' : 'grey_40'}
                size="body2"
                theme={theme}
              />
            </div>
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

  & > div {
    display: flex;
    gap: 8px;
    justify-contents: center;
    align-items: center;
  }
`;
