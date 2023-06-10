import { Thumbnail } from '../Thumbnail';
import { Text } from './../Text/Text';
import { Divider } from '../Divider';
import { ChatBubble } from '../../assets/icons/ChatBubble';
import { Favorite } from '../../assets/icons/Favorite';

interface Props {
  title: string;
  thumbnailSrc?: string;
  secondaryTextFirst?: string;
  secondaryTextSecond?: string;
  commentCnt?: number;
  likeCnt?: number;
  hasBorder?: boolean;
}

const getMergedSecondaryText = (first?: string, second?: string) => {
  if (first && second) return `${first} · ${second}`;

  return first || second;
};

export function ListItem({
  title,
  thumbnailSrc,
  secondaryTextFirst,
  secondaryTextSecond,
  commentCnt,
  likeCnt,
  hasBorder = true,
}: Props) {
  const secondaryText = getMergedSecondaryText(secondaryTextFirst, secondaryTextSecond);

  return (
    <>
      <div className="flex flex-row items-center py-4 w-[540px] cursor-pointer">
        {thumbnailSrc && <Thumbnail src={thumbnailSrc} alt={title} width={85} ratio="16:9" />}
        <div className="ml-3 flex-1">
          {secondaryText && <Text text={secondaryText} size="body2" weight="regular" color="secondary" />}
          <Text text={title} size="body1" weight="medium" color="primary" />
        </div>
        <div className="flex flex-row items-center gap-2 text-text-secondary dark:text-text-secondary_dark">
          {commentCnt && (
            <div className="flex flex-row items-center gap-2">
              <ChatBubble className="w-4 h-4" />
              <Text text={commentCnt.toString()} size="body2" weight="regular" color="secondary" />
            </div>
          )}
          {likeCnt && (
            <div className="flex flex-row items-center gap-2">
              <Favorite className="w-4 h-4" />
              <Text text={likeCnt.toString()} size="body2" weight="regular" color="secondary" />
            </div>
          )}
        </div>
      </div>
      {hasBorder && <Divider variant="secondary" />}
    </>
  );
}
