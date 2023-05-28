import { css } from '@emotion/css';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactChild, useState } from 'react';
import { token } from '../../common/token';
import { Theme, useTheme } from '../../context';
import { Text } from '../Text';

type Props = {
  /**
   * 탭 라벨
   */
  label: string[];

  /**
   * 탭 컴포넌트
   */
  children: ReactChild[];

  /**
   * 탭 정렬
   */
  align: 'left' | 'center';
};

/**
 * 탭 컴포넌트
 *
 * @author ycha
 */
export function Tabs({ label, children, align }: Props) {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(label[0]);

  const tabIndex = label.indexOf(selectedTab);

  return (
    <div className={ContainerStyle(theme)}>
      <div className={NavigationStyle(theme)}>
        <ul className={ListContainerStyle(align)}>
          {label.map((item, index) => (
            <li key={index} className={ListItemStyle(align, theme)} onClick={() => setSelectedTab(item)}>
              <Text align="left" color={item === selectedTab ? 'grey_70' : 'grey_40'} size="body1" text={`${item}`} />

              {item === selectedTab && <motion.div className={UnderlineStyle(theme)} layoutId="underline" />}
            </li>
          ))}
        </ul>
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={selectedTab ? selectedTab : 'empty'}
          initial={{ y: 10, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={ChildrenContainer}
        >
          {children[tabIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const ChildrenContainer = css`
  & > div {
    width: 100% !important;
  }
`;

const ListContainerStyle = (align: Props['align']) => css`
  display: flex;
  ${align === 'center' ? 'width: 100%;' : null}
  gap: 32px;
`;

const ContainerStyle = (theme: Theme) => css`
  border-radius: 10px;
  background: ${theme === 'light' ? token.color.grey_5_light : token.color.grey_5_dark};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const NavigationStyle = (theme: Theme) => css`
  /* padding: 4px 4px 0; */
  overflow-x: scroll;
  overflow-y: hidden;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid ${theme === 'light' ? token.color.grey_30_light : token.color.grey_30_dark};
  height: 56px;
  display: flex;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  & ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
    height: 100%;
  }
`;

const UnderlineStyle = (theme: Theme) => css`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  border-radius: 2px;
  background: ${theme === 'light' ? token.color.grey_70_light : token.color.grey_70_dark};
`;

const ListItemStyle = (align: Props['align'], theme: Theme) => css`
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 10px ${align === 'left' ? '0px' : '15px'};
  position: relative;
  background: ${theme === 'light' ? token.color.grey_5_light : token.color.grey_5_dark};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: fit-content;
  position: relative;
  user-select: none;
`;
