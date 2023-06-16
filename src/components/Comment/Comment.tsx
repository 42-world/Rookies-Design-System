import cx from 'classnames';
import { AvatarText, Badge, Button, Text } from '..';

interface Props {
  avatarSrc: string;
  avatarAlt?: string;
  username: string;
  time: string;
  content: string;
  isMine?: boolean;
  isAuthor?: boolean;
  isLiked?: boolean;
  numOfLikes: number;
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
  numOfLikes = 0,
  onClickLike,
  onClickEdit,
  onClickReply,
}: Props) {
  return (
    <div className="flex flex-col gap-3 w-[720px] overflow-hidden break-words">
      <div className="flex flex-row items-start gap-2">
        <AvatarText src={avatarSrc} alt={avatarAlt} mainText={username} subText={time} />
        {isAuthor && <Badge color="outline" text="작성자" className="ml-1" />}
        {isMine && <Badge color="outline" text="내댓글" />}
      </div>
      <Text size="body2" text={content} />
      <div className="flex flex-row items-center gap-4">
        <Button
          text={`좋아요 ${numOfLikes}`}
          variant="text"
          className={cx('px-0', { '[&>p]:text-color-system_200 [&>p]:dark:text-color-system_200': isLiked })}
          onClick={onClickLike}
        />
        <Button text="답글달기" variant="text" className="px-0 mx-4" onClick={onClickReply} />
        <Button text="수정하기" variant="text" className="px-0" onClick={onClickEdit} />
      </div>
    </div>
  );
}