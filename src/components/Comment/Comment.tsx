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
   * 댓글 작성자의 닉네임입니다.
   */
  username: string;
  /**
   * 댓글 작성 시간입니다.
   */
  time: string;
  /**
   * 댓글의 내용입니다.
   */
  content: string;
  /**
   * 본인의 댓글인지 판단하는 변수입니다.
   */
  isMine?: boolean;
  /**
   * 작성자의 댓글인지 판단하는 변수입니다.
   */
  isAuthor?: boolean;
  /**
   * 댓글 좋아요 여부입니다.
   */
  isLiked?: boolean;
  /**
   * 좋아요의 갯수입니다.
   */
  likeCount?: number;
  /**
   * 좋아요 버튼을 클릭했을 때의 동작을 정의하는 함수입니다.
   */
  onClickLike?: () => void;
  /**
   * 댓글 버튼을 클릭했을 때의 동작을 정의하는 함수입니다.
   */
  onClickReply?: () => void;
  /**
   * 수정하기 버튼을 클릭했을 때의 동작을 정의하는 함수입니다.
   */
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
    <div className="flex flex-col gap-3 overflow-hidden break-words">
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
          className={cx('px-0', { '[&>p]:text-color-system_200': isLiked })}
          onClick={onClickLike}
        />
        <Button text="답글달기" variant="text" className="px-0" onClick={onClickReply} />
        <Button text="수정하기" variant="text" className="px-0" onClick={onClickEdit} />
      </div>
    </div>
  );
}
