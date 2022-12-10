import { css } from '@emotion/css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChatIcon, ThumbIcon } from '../../assets/icons';
import { token } from '../../common/token';
import { Theme } from '../../common/type';
import { Text } from '../../typography/temp';
import { Avatar } from '../Avatar';

type Props = {
  theme: Theme;
  title: string;
  contents: string;
  isThumbed: boolean;
  thumbCount: number;
  commentCount: number;
  user: {
    username: string;
    createdAt: string;
    profileImg: any;
  };
};

export function Feed({ theme, title, contents, isThumbed, thumbCount, commentCount, user }: Props) {
  const thumbedStyle = 'main_green_10';
  const unThumbedStyle = theme === 'light' ? 'grey_50_light' : 'grey_50_dark';

  const [thumbed, setThumbed] = useState(isThumbed);

  return (
    <div>
      <div className={contentsStyle}>
        <Avatar createdAt={user.createdAt} username={user.username} profileImg={user.profileImg} theme={theme} />
        <Text align="left" color="grey_60" size="header4" text={title} theme={theme} />
        <p className={feedTextStyle(theme)}>{contents}</p>
      </div>
      <div className={bottomStyle(theme)}>
        <motion.div whileTap={{ scale: 0.9 }} className={iconContainerStyle} onClick={() => setThumbed(!thumbed)}>
          <div className={iconStyle}>
            <ThumbIcon color={thumbed ? thumbedStyle : unThumbedStyle} />
          </div>
          <Text
            align="left"
            color={thumbed ? 'main_green_10' : 'grey_50'}
            size="body3"
            text={thumbCount.toString()}
            theme={theme}
          />
        </motion.div>
        <div className={iconContainerStyle}>
          <div className={iconStyle}>
            <ChatIcon color={theme === 'light' ? 'grey_50_light' : 'grey_50_dark'} />
          </div>
          <Text align="left" color="grey_50" size="body3" text={commentCount.toString()} theme={theme} />
        </div>
      </div>
    </div>
  );
}

const contentsStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 22px;
`;

const feedTextStyle = (theme: Props['theme']) => css`
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  font-weight: 400;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto;
  color: ${theme === 'light' ? token.color.grey_50_light : token.color.grey_50_dark};
  line-height: 1.5;
`;

const bottomStyle = (theme: Props['theme']) => css`
  display: flex;
  padding: 8px 0px 16px 0px;
  gap: 16px;
  border-bottom: 1px solid ${theme === 'light' ? token.color.grey_30_light : token.color.grey_30_dark};
`;

const iconContainerStyle = css`
  display: flex;
  gap: 6px;
`;

const iconStyle = css`
  width: 18px;
  height: 18px;
`;
