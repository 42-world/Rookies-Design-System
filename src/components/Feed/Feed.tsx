import { css } from '@emotion/css';
import { motion } from 'framer-motion';
import { ChatIcon, ThumbIcon } from '../../assets/icons';
import { token } from '../../common/token';
import { Theme } from '../../common/type';
import { Text } from '../../typography/Text';
import { Avatar } from '../Avatar/Avatar';

type Props = {
  /**
   * 테마
   */
  theme: Theme;

  /**
   * 작성자
   */
  writerName: string;

  /**
   * 작성자 이미지
   */
  writerImg: string;

  /**
   * 피드 제목
   */
  title: string;

  /**
   * 피드 내용
   */
  contents: string;

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
   * 댓글 수
   */
  commentCount: number;

  /**
   * 생성된 시간
   */
  createdAt: string;

  /**
   * 좋아요 클릭 이벤트
   */
  onLikeClick?: React.MouseEventHandler<HTMLDivElement>;
};

/**
 * 피드 컴포넌트
 *
 * @author beason
 *
 * @param param0
 * @returns
 */
export function Feed({
  theme,
  writerName,
  writerImg,
  title,
  contents,
  isLike,
  likeCount,
  commentCount,
  createdAt,
  onLikeClick,
}: Props) {
  const thumbedStyle = 'main_green_10';
  const unThumbedStyle = theme === 'light' ? 'grey_50_light' : 'grey_50_dark';

  return (
    <div>
      <div className={contentsStyle}>
        <Avatar theme={theme} name={writerName} img={writerImg} seconderyText={createdAt} />
        <Text align="left" color="grey_60" size="header4" text={title} theme={theme} />
        <p className={feedTextStyle(theme)}>{contents}</p>
      </div>
      <div className={bottomStyle(theme)}>
        <motion.div whileTap={{ scale: 0.9 }} className={iconContainerStyle} onClick={onLikeClick}>
          <div className={iconStyle}>
            <ThumbIcon color={isLike ? thumbedStyle : unThumbedStyle} />
          </div>
          <Text
            align="left"
            color={isLike ? 'main_green_10' : 'grey_50'}
            size="body3"
            text={likeCount.toString()}
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
