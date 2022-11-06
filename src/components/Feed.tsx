import { css } from '@emotion/css';
import * as React from 'react';
import { tokens } from '../tokens';
import { Text } from '../typography/Text';
import { Avatar } from './Avatar';

type User = {
  username: string;
  createdAt: string;
  profileImg: any;
};

type Props = {
  theme: 'light' | 'dark';
  title: string;
  contents: string;
  isThumbed: boolean;
  thumbCount: number;
  commentCount: number;
  user: User;
};

export function Feed({ theme, title, contents, isThumbed, thumbCount, commentCount, user }: Props) {
  const bottomStyle = css`
    display: flex;
    padding: 8px 0px 16px 0px;
    gap: 16px;
    border-bottom: 1px solid ${theme === 'light' ? tokens.color.grey_30_light : tokens.color.grey_30_dark};
  `;

  const thumbedStyle = tokens.color.main_green_10;

  const unThumbedStyle = theme === 'light' ? tokens.color.grey_50_light : tokens.color.grey_50_dark;

  return (
    <div>
      <div className={contentsStyle}>
        <Avatar createdAt={user.createdAt} username={user.username} profileImg={user.profileImg} theme={theme} />
        <Text align="left" color="grey_60" size="Header4" text={title} theme={theme} />
        <p
          style={{
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            wordWrap: 'break-word',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            fontSize: '15px',
            fontWeight: 400,
            fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto',
            color: theme === 'light' ? tokens.color.grey_50_light : tokens.color.grey_50_dark,
            lineHeight: 1.25,
          }}
        >
          {contents}
        </p>
      </div>
      <div className={bottomStyle}>
        <div className={iconContainerStyle}>
          <div className={iconStyle}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="18"
              height="18"
              color={isThumbed ? thumbedStyle : unThumbedStyle}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              ></path>
            </svg>
          </div>
          <Text
            align="left"
            color={isThumbed ? 'main_green_10' : 'grey_50'}
            size="Body3"
            text={thumbCount.toString()}
            theme={theme}
          />
        </div>
        <div className={iconContainerStyle}>
          <div className={iconStyle}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="18"
              height="18"
              color={theme === 'light' ? tokens.color.grey_50_light : tokens.color.grey_50_dark}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
          </div>
          <Text align="left" color="grey_50" size="Body3" text={commentCount.toString()} theme={theme} />
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

const iconContainerStyle = css`
  display: flex;
  gap: 6px;
`;

const iconStyle = css`
  width: 18px;
  height: 18px;
`;
