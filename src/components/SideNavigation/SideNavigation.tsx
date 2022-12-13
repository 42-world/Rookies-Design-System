import { css } from '@emotion/css';
import { motion } from 'framer-motion';
import React from 'react';
import { token } from '../../common/token';
import { Theme } from '../../common/type';
import { Text } from '../../typography/text/Text';

type ListProps = {
  icon: string;
  text: string;
  link: string;
};

type Props = {
  theme: Theme;
  pageType: 'One Page' | 'Multi Page';
  currentLink?: string;
  hasIcon?: boolean;
  list: ListProps[];
};

export function SideNavigation({ theme, hasIcon, currentLink, list }: Props) {
  return (
    <div className={contaier}>
      {list.map((list) => {
        return (
          <a data-framer-smooth-scroll className={itemContainer} href={list.link}>
            {/* <div>{list.icon}</div> */}
            <Text
              text={list.text}
              align="left"
              color={currentLink === list.link ? 'main_green_10' : 'grey_40'}
              size="body2"
              theme={theme}
            />
            {currentLink === list.link && (
              <motion.div
                className={css`
                  width: 3px;
                  height: 20px;
                  background-color: ${token.color.main_green_10};
                  border-radius: 0px 2px 2px 0px;
                `}
                layoutId="underline"
              />
            )}
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
