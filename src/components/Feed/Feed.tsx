import { AvatarText } from '../AvatarText';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { Text } from '../Text';
import { Thumbnail } from '../Thumbnail';

import CommentIcon from '@material-design-icons/svg/filled/comment.svg';
import LikeIcon from '@material-design-icons/svg/filled/thumb_up.svg';

interface Props {
  /**
   * 게시글 작성자의 닉네임입니다.
   */
  username: string;
  /**
   * 게시글 작성 시간입니다.
   */
  timestamp: string;
  /**
   * 게시글 작성자의 프로필 사진 주소입니다.
   */
  userProfileSrc: string;
  /**
   * 게시글의 썸네일 사진 주소입니다.
   */
  thumbnailSrc: string;
  /**
   * 게시글 제목입니다.
   */
  title: string;
  /**
   * 게시글 본문입니다.
   */
  contents: string;
  /**
   * 게시글 좋아요 여부입니다.
   */
  isLiked?: boolean;
  /**
   * 좋아요의 갯수입니다.
   */
  likeCount?: number;
  /**
   * 댓글 클릭 여부입니다.
   */
  isCommentClicked?: boolean;
  /**
   * 댓글의 갯수입니다.
   */
  commentCount?: number;
  /**
   * 좋아요 버튼을 클릭했을 때의 동작을 정의하는 함수입니다.
   */
  onClickLike?: () => void;
  /**
   * 댓글 버튼을 클릭했을 때의 동작을 정의하는 함수입니다.
   */
  onClickComment?: () => void;
}

export function Feed({
  username,
  timestamp,
  userProfileSrc,
  thumbnailSrc,
  title,
  contents,
  isLiked,
  likeCount = 0,
  isCommentClicked,
  commentCount = 0,
  onClickLike,
  onClickComment,
}: Props) {
  return (
    <div className="group/feed w-411 transition-transform duration-200 ease-in-out active:scale-92">
      <AvatarText src={userProfileSrc} mainText={username} subText={timestamp} />
      <Thumbnail
        src={thumbnailSrc}
        width={411}
        className="mt-4 transition-transform duration-200 ease-in-out group-hover/feed:translate-y-m8"
      />
      <div className="relative mt-6 w-411">
        <Text size="heading2" weight="semibold" text={title} className="mb-4" />
        <Text text={contents} className="line-clamp-4" />
        <div className="absolute left-0 top-0 z-10 h-full w-411 bg-gradient-to-t from-bg-primary to-transparent dark:from-bg-primary_dark " />
      </div>
      <div className=" mb-4 mt-4 flex flex-row items-center justify-start">
        <Button
          variant="text"
          activated={isLiked}
          icon={<LikeIcon />}
          text={likeCount.toString()}
          onClick={onClickLike}
        />
        <Button
          variant="text"
          activated={isCommentClicked}
          icon={<CommentIcon />}
          text={commentCount.toString()}
          onClick={onClickComment}
        />
      </div>
      <Divider variant="primary" className="w-411" />
    </div>
  );
}
