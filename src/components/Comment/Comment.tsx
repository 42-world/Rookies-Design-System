import cx from 'classnames';
import { AvatarText } from '../AvatarText';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Text } from '../Text';

interface Props {
  /**
   * 댓글 작성자의 프로필 사진 주소입니다.
   */
  avatarSrc: string;

  /**
   * 댓글 작성자의 프로필 사진 대체 텍스트입니다.
   */
  avatarAlt?: string;

  /**
   * 댓글 작성자의 이름입니다.
   */
  username: string;
  time: string;
  content: string;
  isMine?: boolean;
  isAuthor?: boolean;
  isLiked?: boolean;
  likeCount?: number;
  onClickLike?: () => void;
  onClickReply?: () => void;
  onClickEdit?: () => void;
}

/**
 * 댓글에 사용되는 컴포넌트입니다.
 */
export function Comment({
  avatarSrc,
  avatarAlt = '',
  username,
  time,
  content,
  isMine,
  isAuthor,
  isLiked,
  likeCount = 0,
  onClickLike,
  onClickEdit,
  onClickReply,
}: Props) {
  return (
    <div className="flex w-[720px] flex-col gap-3 overflow-hidden break-words">
      <div className="flex flex-row items-start gap-2">
        <AvatarText src={avatarSrc} alt={avatarAlt} mainText={username} subText={time} />
        {isAuthor && <Badge color="outline" text="작성자" className="ml-1" />}
        {isMine && <Badge color="outline" text="내댓글" />}
      </div>
      <Text size="body2" text={content} weight="medium" />
      <div className="flex flex-row items-center gap-4">
        <Button
          text={`좋아요 ${likeCount}`}
          variant="text"
          className={cx('px-0', { '[&>p]:text-color-system_200 [&>p]:dark:text-color-system_200': isLiked })}
          onClick={onClickLike}
        />
        <Button text="답글달기" variant="text" className="px-0" onClick={onClickReply} />
        <Button text="수정하기" variant="text" className="px-0" onClick={onClickEdit} />
      </div>
    </div>
  );
}
