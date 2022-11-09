import { css } from '@emotion/css';
import * as React from 'react';
import { Text } from '../typography/Text';
import { Avatar } from './Avatar';

type User = {
  username: string;
  createdAt: string;
  profileImg: any;
};

type Props = {
  theme: 'light' | 'dark';
  text: string;
  isThumbed: boolean;
  thumbCount: number;
  user: User;
};

export function Comment({ theme, text, isThumbed, thumbCount, user }: Props) {
  const containerStyle = css`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `;

  const textWrapperStyle = css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-left: 52px;
  `;

  return (
    <div className={containerStyle}>
      <Avatar createdAt={user.createdAt} profileImg={user.profileImg} theme={theme} username={user.username} />
      <div className={textWrapperStyle}>
        <Text size="Body3" align="left" color="grey_50" text={text} theme={theme} />
        <Text
          size="Caption"
          align="left"
          color={isThumbed ? 'main_green_10' : 'grey_50'}
          text={`좋아요 ${thumbCount}`}
          theme={theme}
        />
      </div>
    </div>
  );
}
