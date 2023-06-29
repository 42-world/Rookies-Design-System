import { AvatarText } from '../AvatarText';
import { Thumbnail } from '../Thumbnail';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { Text } from '../Text';

import CommentIcon from '@material-design-icons/svg/filled/comment.svg';
import LikeIcon from '@material-design-icons/svg/filled/thumb_up.svg';

interface Props {
  username: string;
  timestamp: string;
  userProfileSrc: string;
  thumbnailSrc: string;
  title: string;
  contents: string;
  isLiked?: boolean;
  likeCount?: number;
  isCommentClicked?: boolean;
  commentCount?: number;
  onClickLike?: () => void;
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
        <Button variant="text" activated={isLiked} icon={LikeIcon} text={likeCount.toString()} onClick={onClickLike} />
        <Button
          variant="text"
          activated={isCommentClicked}
          icon={CommentIcon}
          text={commentCount.toString()}
          onClick={onClickComment}
        />
      </div>
      <Divider variant="primary" className="w-411" />
    </div>
  );
}
