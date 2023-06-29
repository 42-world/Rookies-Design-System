import cx from 'classnames';
import { AvatarText } from '../AvatarText';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Text } from '../Text';

interface Props {
  avatarSrc: string;
  avatarAlt?: string;
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
      <Text size="body2" text={content} />
      <div className="flex flex-row items-center gap-4">
        <Button
          text={`좋아요 ${likeCount}`}
          variant="text"
          className={cx('px-0', { '[&>p]:text-color-system_200 [&>p]:dark:text-color-system_200': isLiked })}
          onClick={onClickLike}
        />
        <Button text="답글달기" variant="text" className="mx-4 px-0" onClick={onClickReply} />
        <Button text="수정하기" variant="text" className="px-0" onClick={onClickEdit} />
      </div>
    </div>
  );
}
