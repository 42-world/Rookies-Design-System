import { css } from '@emotion/css';
import { Avatar } from '../Avatar/Avatar';
import { Text } from '../Text';

interface Props {
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
export function Comment({ writerName, writerImg, text, isLike, likeCount, createdAt }: Props) {
  // const theme = useTheme();

  return (
    <div className={containerStyle}>
      <Avatar name={writerName} img={writerImg} secondaryText={createdAt} />
      <div className={textWrapperStyle}>
        <Text size="body3" align="left" color="grey_50" text={text} />
        <Text size="caption" align="left" color={isLike ? 'main_green_10' : 'grey_50'} text={`좋아요 ${likeCount}`} />
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
