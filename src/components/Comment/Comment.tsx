import { css } from '@emotion/css';
import React from 'react';
import { Theme } from '../../common/type';
import { Text } from '../../typography/Text';
import { Avatar } from '../Avatar/Avatar';
React;

interface Props {
  /**
   * 테마
   */
  theme: Theme;

  /**
   * 작성자 이름
   */
  writerName: string;

  /**
   * 작성자 이미지
   */
  writerImg: string;

  /**
   * 댓글 내용
   */
  text: string;

  /**
   * 좋아요 여부
   *
   * @default false
   */
  isLike?: boolean;

  /**
   * 좋아요 수
   */
  likeCount: number;

  /**
   * 생성된 시간
   */
  createdAt: string;
}

/**
 * 댓글 컴포넌트
 *
 * @author junseo
 */
export function Comment({ theme, writerName, writerImg, text, isLike, likeCount, createdAt }: Props) {
  return (
    <div className={containerStyle}>
      <Avatar theme={theme} name={writerName} img={writerImg} secondaryText={createdAt} />
      <div className={textWrapperStyle}>
        <Text size="body3" align="left" color="grey_50" text={text} theme={theme} />
        <Text
          size="caption"
          align="left"
          color={isLike ? 'main_green_10' : 'grey_50'}
          text={`좋아요 ${likeCount}`}
          theme={theme}
        />
      </div>
    </div>
  );
}

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
