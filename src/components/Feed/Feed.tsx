import { AvatarText } from '../AvatarText';
import { Thumbnail } from '../Thumbnail';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { Text } from '../Text';

import CommentIcon from '/Users/chichoon/Documents/42world-Design-System/node_modules/@material-design-icons/svg/filled/comment.svg';
import LikeIcon from '/Users/chichoon/Documents/42world-Design-System/node_modules/@material-design-icons/svg/filled/thumb_up.svg';

interface Props {
  username: string;
  timestamp: string;
  userProfileSrc: string;
  thumbnailSrc: string;
  title: string;
  contents: string;
  isLiked?: boolean;
  numOfLikes?: number;
  isCommentClicked?: boolean;
  numOfComments?: number;
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
}: Props) {
  return (
    <div className="group/feed w-411 active:scale-92 transition-transform ease-in-out duration-300">
      <AvatarText src={userProfileSrc} mainText={username} subText={timestamp} />
      <Thumbnail
        src={thumbnailSrc}
        width={411}
        className="mt-4 group-hover/feed:translate-y-m8 transition-transform ease-in-out duration-300"
      />
      <div className="relative w-411 mt-6">
        <Text size="heading2" weight="semibold" text={title} className="mb-4" />
        <Text text={contents} className="line-clamp-4" />
        <div className="absolute h-full z-10 top-0 left-0 w-411 from-bg-primary dark:from-bg-primary_dark to-transparent bg-gradient-to-t " />
      </div>
      <div className=" flex flex-row items-center justify-start mt-4 mb-4">
        <Button variant="text" icon={LikeIcon} text={likeCount.toString()} />
        <Button variant="text" icon={CommentIcon} text={commentCount.toString()} />
      </div>
      <Divider variant="primary" className="w-411" />
    </div>
  );
}
