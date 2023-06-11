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

const MergedSecondaryText = (first?: string, second?: string) => {
  return (
    <div className="flex flex-row items-center gap-1">
      {first && <Text text={first} size="body2" weight="medium" color="secondary" />}
      {first && second && '·'}
      {second && <Text text={second} size="body2" weight="regular" color="secondary" />}
    </div>
  );
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
  return (
    <div className="w-[540px] cursor-pointer active:scale-95 transition-transform duration-300 ease-out">
      <div className="flex flex-row items-center py-4">
        {thumbnailSrc && <Thumbnail src={thumbnailSrc} alt={title} width={85} ratio="16:9" />}
        <div className="ml-3 flex-1">
          {MergedSecondaryText(secondaryTextFirst, secondaryTextSecond)}
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
    </div>
  );
}
