import { css } from '@emotion/css';
import { motion } from 'framer-motion';
import { createElement, useEffect, useState } from 'react';
import * as IconComponents from '../../assets/icons';
import { token } from '../../common/token';
import { Icons } from '../../common/type/icons';
import { useTheme } from '../../context';
import { Text } from '../Text';

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
   * 현재 링크(focused)
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
 * @author beson
 */
export function SideNavigation({ hasIcon, focus, list }: Props) {
  const theme = useTheme();
  const [current, setCurrent] = useState(focus);
  const activeColor = 'main_green_10';
  const unActiveColor = theme === 'light' ? 'grey_40_light' : 'grey_40_dark';

  // 굳이 할 필요없지만, 이상하게도 넣어두지 않으면 framer 에서 상태가 제대로 들어가지 않음
  useEffect(() => {
    setCurrent(focus);
  }, [focus]);

  const handleClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className={container}>
      {list.map((item, index) => {
        return (
          <a key={index} className={itemContainer} href={item.link} onClick={() => handleClick(index)}>
            <div>
              {hasIcon &&
                createElement(IconComponents[item.icon], {
                  color: current === index ? activeColor : unActiveColor,
                })}
              <Text
                text={item.text}
                align="left"
                color={current === index ? 'main_green_10' : 'grey_40'}
                size="body2"
              />
            </div>
            {current === index ? (
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

const container = css`
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
